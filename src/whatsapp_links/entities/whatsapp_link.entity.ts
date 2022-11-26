import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { AutoMap } from "@automapper/classes";

@Entity()
/**
 * Whatsapp links entity.
 */
export class WhatsappLink {
    @PrimaryGeneratedColumn("uuid")
    @AutoMap()
    public id: string;

    @Column()
    @IsNotEmpty()
    @AutoMap()
    public link: string;

    @Column()
    @IsNotEmpty()
    @AutoMap()
    public name: string;

    @Column()
    @IsNotEmpty()
    @AutoMap()
    public description: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    @AutoMap()
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    @AutoMap()
    public updated_at: Date;
}
