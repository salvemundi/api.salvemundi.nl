import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class Club extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @IsNotEmpty()
    public club_name: string;

    @IsNotEmpty()
    public founder_name: string;

    @IsNotEmpty()
    public nick_name: string;

    @IsNotEmpty()
    public img_path: string;

    @IsNotEmpty()
    @Column({nullable: true})
    public whatsapp_link: string;

    @IsNotEmpty()
    @Column({nullable: true})
    public discord_link: string;

    @IsNotEmpty()
    @Column({nullable: true})
    public other_link: string;

    @Column({type: "longtext"})
    public description: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
