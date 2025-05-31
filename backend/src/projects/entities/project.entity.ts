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

  @Column()
  location: string;

  @Column()
  long: number;

  @Column()
  lat: number;

  @ManyToOne(() => User, (user) => user.projects)
  client: User;

  @ManyToOne(() => Manager, (manager) => manager.projectsAssigned)
  manager: Manager;
}
