import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';


/**
 * Represents a Club.
 */
@Entity()
export default class Club extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @IsNotEmpty()
    @Column()
    public club_name: string;

    @IsNotEmpty()
    @Column()
    public founder_name: string;

    @IsNotEmpty()
    @Column()
    public nick_name: string;

    @IsNotEmpty()
    @Column()
    public img_path: string;

    @IsNotEmpty()
    @Column()
    public whatsapp_link: string;

    @Column({nullable: true})
    public discord_link: string;

    @Column({nullable: true})
    public other_link: string;

    @Column({type: "longtext"})
    public description: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
