import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostPhoto } from './entities/post-photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostPhoto])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
