import { AutoMap } from "@automapper/classes";

export class UpdateJobDto {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly study_profile: number;

    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly description: string;
}
