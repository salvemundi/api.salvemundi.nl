import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity()
/**
 * User entity.
 */
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public azure_id: string;

  @Column()
  public first_name: string;

  @Column({
    nullable: true
  })
  public insertion: string;

  @Column()
  public last_name: string;

  @Column()
  public phone_number: string;

  @Column()
  public email: string;

  @Column()
  public birthday: string;

  @Column()
  public visibility: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}
