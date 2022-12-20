import { AutoMap } from "@automapper/classes";

export default class CreateLinkDto {
    @AutoMap()
    readonly link: string;
}
