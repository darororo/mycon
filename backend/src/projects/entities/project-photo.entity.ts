import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  thumbnail: string;

  @ManyToOne(() => Project, (project) => project.photos)
  project: Project;
}
