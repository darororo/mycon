import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemname: String;

    @Column()
    category: String;

    @Column()
    quantity: Number;

    @Column()
    unit: Boolean;

    @Column({type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    date: Date;

    @ManyToOne(() => Project, project => project.inventory, {onDelete: 'CASCADE'})
    project: Project
}
