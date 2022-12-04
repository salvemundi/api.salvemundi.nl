import { AutoMap } from "@automapper/classes";

export default class GetLinkDto {
    @AutoMap()
    readonly id: string;
    
    @AutoMap()
    readonly link: string;
    
    @AutoMap()
    readonly created_at: Date;
    
    @AutoMap()
    readonly updated_at: Date;
}
