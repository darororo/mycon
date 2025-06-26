import { Project } from 'src/projects/entities/project.entity';
import { Worker } from 'src/workers/entities/worker.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Worker, (worker) => worker.attendance)
  worker: Worker;

  @Column()
  hours: number;

  @Column()
  date: Date;

  @ManyToOne(() => Project, (project) => project.attendance)
  project: Project;
}
