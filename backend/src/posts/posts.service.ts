import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { CommentsService } from 'src/comments/comments.service';
import { UploadService } from 'src/upload/upload.service';
import { PostPhoto } from './entities/post-photo.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(PostPhoto)
    private readonly photoRepository: Repository<PostPhoto>,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentService: CommentsService,
    private readonly uploadService: UploadService,
    // private readonly configService: ConfigService,
  ) {}

  async create(createPostDto: CreatePostDto, files: Express.Multer.File[]) {
    const post = this.postRepository.create(createPostDto);

    if (files) {
      // const storageHost =
      //   this.configService.getOrThrow<string>('MINIO_ENDPOINT');
      // const storagePort = this.configService.getOrThrow<string>('MINIO_PORT');
      // const storageBucket =
      //   this.configService.getOrThrow<string>('MINIO_BUCKET');

      // const fileStorage = `${storageHost}:${storagePort}/${storageBucket}/`;

      const pathPrefix = 'posts/';

      const { original, small } = this.uploadService.uploadImages(files, {
        prefix: pathPrefix,
      });
      const imgOriginal = await Promise.all(original);
      const imgSmall = await Promise.all(small);

      const photos: PostPhoto[] = [];

      for (let i = 0; i < files.length; i++) {
        const fileName = files[i].originalname;

        const photoData = this.photoRepository.create();
        photoData.url = pathPrefix + 'original/' + fileName;
        photoData.thumbnail = pathPrefix + 'small/' + fileName;

        const photo = await this.photoRepository.save(photoData);
        photos.push(photo);
      }

      post.photos = photos;
    }

    return this.postRepository.save(post);
  }

  async createComment(postId: number, createCommentDto: CreateCommentDto) {
    const comment = await this.commentService.create(postId, createCommentDto); // will throw if comment is null or post is null
    return comment;
  }

  // async findOneWithComments() {

  // }

  async findAll() {
    return this.postRepository.find({
      relations: { comments: true, photos: true },
    });
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: { comments: true, photos: true },
    });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    Object.assign(post, updatePostDto);

    return this.postRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    return this.postRepository.remove(post);
  }
}
