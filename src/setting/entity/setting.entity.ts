import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { SettingType } from '../setting.enum'

@Entity()
export default class Setting extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({unique: true})
    @IsNotEmpty()
    public title: string;

    @Column({nullable: true, type: "longtext"})
    public description: string;

    @Column({type: "longtext"})
    @IsNotEmpty()
    public value: string;

    @Column({
        type: "enum",
        enum: SettingType,
        default: SettingType.boolean
    })
    @IsNotEmpty()
    public type: SettingType;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
