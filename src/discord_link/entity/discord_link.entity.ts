import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * Represents a Discord Link.
 */
@Entity()
export default class DiscordLink extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    @AutoMap()
    public id: string;

    @Column()
    @IsNotEmpty()
    @AutoMap()
    public link: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    @AutoMap()
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    @AutoMap()
    public updated_at: Date;
}
