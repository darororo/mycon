import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../enums/role.enum';
import { Project } from 'src/projects/entities/project.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { UserPhoto } from 'src/users/entities/user-photo.entity';
import { Exclude } from 'class-transformer';
import { Gender } from 'src/common/enums/gender.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column({ default: Gender.Male })
  gender: Gender;

  @Column()
  lastName: string;

  @Column({ default: UserRole.Client })
  role: UserRole;

  @Column({ unique: true })
  email: string;

  // add new
  @Column({ select: false })
  password: string;

  //add new
  @Column({ nullable: true })
  phone?: string;

  // add new
  @Column({ nullable: true })
  address?: string;

  // Error User#photos not defined
  @OneToMany(() => UserPhoto, (photo) => photo.user)
  photos: UserPhoto[];

  @OneToMany(() => Project, (project) => project.client)
  projects: Project[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @Column({ nullable: true })
  refreshToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
