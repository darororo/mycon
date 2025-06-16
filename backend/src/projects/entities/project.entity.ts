import { Inventory } from 'src/inventory/entities/inventory.entity';
import { Manager } from 'src/managers/entities/manager.entity';
import { User } from 'src/users/entities/user.entity';
import { Worker } from 'src/workers/entities/worker.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectPhoto } from './project-photo.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', default: 0 })
  price: number;

  @Column()
  location: string;

  @Column({ type: 'decimal', default: 0 })
  longtitude: number;

  @Column({ type: 'decimal', default: 0 })
  latitude: number;

  @ManyToOne(() => User, (user) => user.projects)
  client: User;

  @ManyToOne(() => Manager, (manager) => manager.projectsAssigned)
  manager: Manager;

  @ManyToMany(() => Worker, (worker) => worker.projects)
  @JoinTable()
  workers: Worker[];

  @OneToMany(() => Inventory, (inventory) => inventory.project)
  inventory: Inventory[];

  @OneToMany(() => ProjectPhoto, (photo) => photo.project)
  photos: ProjectPhoto[];
}
