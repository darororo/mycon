import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { User } from '../users/entities/user.entity';
import { Project } from '../projects/entities/project.entity';
import { Manager } from 'src/managers/entities/manager.entity';
import { Inventory } from 'src/inventory/entities/inventory.entity';
import { ProjectPhoto } from 'src/projects/entities/project-photo.entity';
import { Worker } from 'src/workers/entities/worker.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Post } from 'src/posts/entities/post.entity';
import { PostPhoto } from 'src/posts/entities/post-photo.entity';
import { UserPhoto } from 'src/users/entities/user-photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'mycon_dev',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      UserPhoto,
      Post,
      PostPhoto,
      Comment,
      Project,
      Manager,
      Worker,
      Inventory,
      ProjectPhoto,
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
