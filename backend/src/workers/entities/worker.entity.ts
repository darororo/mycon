import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WorkerRole } from '../enums/worker-role.enum';
import { Gender } from 'src/common/enums/gender.enum';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: Gender;

  @Column({ default: WorkerRole.Normal })
  role: WorkerRole;

  @Column({ type: 'decimal' })
  dailyRate: number;

  @ManyToMany(() => Project, (project) => project.workers)
  projects: Project[];
}
