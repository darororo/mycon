import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class UserPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  thumbnail: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
