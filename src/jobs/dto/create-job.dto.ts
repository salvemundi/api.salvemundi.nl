import { AutoMap } from "@automapper/classes";
import { StudyProfilesEnum } from "../../enums/study_profiles_enum";

export class CreateJobDto {
    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly study_profile: StudyProfilesEnum;

    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly description: string;
}
