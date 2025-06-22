import { Project } from 'src/projects/entities/project.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WorkerRole } from '../enums/worker-role.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { Payroll } from 'src/payroll/entities/payroll.entity';
import { Attendance } from 'src/attendances/entities/attendance.entity';

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
  hourlyRate: number;

  @ManyToMany(() => Project, (project) => project.workers, { nullable: true })
  projects: Project[];

  @OneToMany(() => Payroll, (payroll) => payroll.worker)
  payrolls: Payroll[];

  @OneToMany(() => Attendance, (attendance) => attendance.worker)
  attendance: Attendance[];
}
