import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { AutoMap } from "@automapper/classes";
import { StudyProfilesEnum } from '../../enums/study_profiles_enum';

@Entity()
/**
 * Job entity.
 */
export class Job {
    @PrimaryGeneratedColumn("uuid")
    @AutoMap()
    public id: string;

    @Column()
    @IsNotEmpty()
    @AutoMap()
    public name: string;

    @Column({
        type: "set",
        enum: StudyProfilesEnum,
        default: [StudyProfilesEnum.NONE],
    })
    @IsNotEmpty()
    @AutoMap()
    public study_profile: StudyProfilesEnum;

    @Column()
    @IsNotEmpty()
    @AutoMap()
    public link: string;

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
