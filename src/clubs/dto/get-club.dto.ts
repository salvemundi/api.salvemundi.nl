import { AutoMap } from "@automapper/classes";

export default class GetClubDto {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    readonly club_name: string;
    
    @AutoMap()
    readonly founder_name: string;
    
    @AutoMap()
    readonly nick_name: string;
    
    @AutoMap()
    readonly img_path: string;
    
    @AutoMap()
    readonly whatsapp_link: string;
    
    @AutoMap()
    readonly discord_link: string;
    
    @AutoMap()
    readonly other_link: string;
    
    @AutoMap()
    readonly description: string;
    
    @AutoMap()
    readonly created_at: Date;
    
    @AutoMap()
    readonly updated_at: Date;
}
