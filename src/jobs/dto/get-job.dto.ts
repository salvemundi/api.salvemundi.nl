import { AutoMap } from "@automapper/classes";
import { StudyProfilesEnum } from "../../enums/study_profiles_enum";

export class GetJobDto {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly study_profile: StudyProfilesEnum;

    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly description: string;

    @AutoMap()
    readonly created_at: Date;

    @AutoMap()
    readonly updated_at: Date;
}
