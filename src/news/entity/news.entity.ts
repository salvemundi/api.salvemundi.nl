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
export default class News extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @AutoMap()
  public id: string;

  @Column({
    type: 'longtext',
  })
  @IsNotEmpty()
  @AutoMap()
  public title: string;

  @Column({
    type: 'longtext',
  })
  @IsNotEmpty()
  @AutoMap()
  public description: string;

  @Column({
    nullable: true,
    type: 'longtext',
  })
  @AutoMap()
  public img_path: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @AutoMap()
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  @AutoMap()
  public updated_at: Date;
}
