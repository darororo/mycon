import { Manager } from 'src/managers/entities/manager.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', nullable: true })
  price: number;

  @Column()
  location: string;

  @Column({ type: 'decimal', nullable: true })
  longtitude: number;

  @Column({ type: 'decimal', nullable: true })
  latitude: number;

  @ManyToOne(() => User, (user) => user.projects)
  client: User;

  @ManyToOne(() => Manager, (manager) => manager.projectsAssigned)
  manager: Manager;
}
