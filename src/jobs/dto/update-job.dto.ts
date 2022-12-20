import { AutoMap } from "@automapper/classes";
import { StudyProfilesEnum } from "../../enums/study_profiles_enum";

export class UpdateJobDto {
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
}
