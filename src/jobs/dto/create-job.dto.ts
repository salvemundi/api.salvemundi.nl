import { AutoMap } from "@automapper/classes";

export class CreateJobDto {
    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly study_profile: number;

    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly description: string;
}
