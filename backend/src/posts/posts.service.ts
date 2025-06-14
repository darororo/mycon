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

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentService: CommentsService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }

  async createComment(postId: number, createCommentDto: CreateCommentDto) {
    const comment = await this.commentService.create(postId, createCommentDto); // will throw if comment is null or post is null
    return comment;
  }

  // async findOneWithComments() {

  // }

  async findAll() {
    return this.postRepository.find({ relations: { comments: true } });
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: { comments: true },
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
