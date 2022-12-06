import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Rule extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @AutoMap()
    public id: string;

    @IsNotEmpty()
    @Column()
    @AutoMap()
    public pdf_path: string;

    @IsNotEmpty()
    @Column()
    @AutoMap()
    public name: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    @AutoMap()
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    @AutoMap()
    public updated_at: Date;
}
