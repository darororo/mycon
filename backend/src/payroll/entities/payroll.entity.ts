import { Project } from 'src/projects/entities/project.entity';
import { Worker } from 'src/workers/entities/worker.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Payroll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal' })
  totalHours: number;

  @Column({ type: 'decimal' })
  hourlyRate: number;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  allowance: number;

  @Column({ type: 'decimal', scale: 2, default: 0 })
  deduction: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Worker, (worker) => worker.payrolls)
  worker: Worker;

  @ManyToOne(() => Project, (project) => project.payrolls)
  project: Project;
}
