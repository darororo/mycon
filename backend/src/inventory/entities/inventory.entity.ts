import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuantityUnit } from '../enum/unit.enum';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  category: String;

  @Column()
  quantity: Number;

  @Column({ default: QuantityUnit.Piece })
  unit: QuantityUnit;

  @ManyToOne(() => Project, (project) => project.inventory, {
    onDelete: 'CASCADE',
  })
  project: Project;
}
