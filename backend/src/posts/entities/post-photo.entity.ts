import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class PostPhoto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;
  @Column()
  thumbnail: string;

  @ManyToOne(() => Post, (post) => post.photos)
  post: Post;
}
