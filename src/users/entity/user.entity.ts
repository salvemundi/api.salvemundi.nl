import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
/**
 * User entity.
 */
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public azure_id: string;

  @Column()
  @IsNotEmpty()
  public first_name: string;

  @Column({ nullable: true })
  public insertion: string;

  @Column()
  @IsNotEmpty()
  public last_name: string;

  @Column()
  @IsNotEmpty()
  public phone_number: string;

  @Column()
  public email: string;

  @Column()
  @IsNotEmpty()
  public birthday: string;

  @Column({ default: true })
  public visibility: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}
