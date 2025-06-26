import { forwardRef, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostPhoto } from './entities/post-photo.entity';
import { CommentsModule } from 'src/comments/comments.module';
import { Comment } from 'src/comments/entities/comment.entity';
import { UploadModule } from 'src/upload/upload.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostPhoto, Comment]),
    forwardRef(() => CommentsModule),
    UploadModule,
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
