import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly userService: UsersService,
    @Inject(forwardRef(() => PostsService))
    private readonly postService: PostsService,
  ) {}

  async create(postId: number, createCommentDto: CreateCommentDto) {
    const post = await this.postService.findOne(postId); // will throw if post is null

    const comment = this.commentRepository.create(createCommentDto);
    comment.post = post;

    return this.commentRepository.save(comment);
  }

  async findAll() {
    return this.commentRepository.find();
  }

  async findOne(id: number) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException();
    }
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(id);

    Object.assign(comment, updateCommentDto);

    return this.commentRepository.save(comment);
  }

  async remove(id: number) {
    const comment = await this.findOne(id);

    return this.commentRepository.remove(comment);
  }
}
