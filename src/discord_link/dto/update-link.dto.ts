import { AutoMap } from "@automapper/classes";

export default class UpdateLinkDto {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    readonly link: string;
}
