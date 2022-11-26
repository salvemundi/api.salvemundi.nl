import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UpdateClubDto from './dto/update-club.dto';
import Club from './entity/club.entity';

@Injectable()
export class ClubService {

  constructor(@InjectRepository(Club) private clubRepository: Repository<Club>) {
    /* .. empty constructor .. */
  }

  /**
   * Creates a club.
   * @param club The club to create.
   * @returns The created club.
   */
  public async create(club: Club): Promise<Club> {
    return await this.clubRepository.save(club);
  }

  /**
   * Gets all registered clubs.
   * @returns An array of registered clubs.
   */
  public async findAll(): Promise<Club[]> {
    return await this.clubRepository.find();
  }


  public async findOne(id: string): Promise<Club> {
    let club = await this.clubRepository.findOneBy({id: id});
    
    if(club == null) {
      throw new NotFoundException('Club could not be found');
    }

    return club;
  }

  /**
   * Updates the specified club.
   * @param id The ID of the club to update.
   * @param clubProps The club properties to update.
   * @returns The updated club.
   */
  public async update(id: string, clubProps: UpdateClubDto): Promise<Club> {
    let foundClub = await this.findOne(id);
    
    foundClub.club_name = clubProps.club_name;
    foundClub.founder_name = clubProps.founder_name;
    foundClub.nick_name = clubProps.nick_name;
    foundClub.img_path = clubProps.img_path;
    foundClub.whatsapp_link = clubProps.whatsapp_link;
    foundClub.discord_link = clubProps.discord_link;
    foundClub.other_link = clubProps.other_link;
    foundClub.description = clubProps.description;

    return await this.clubRepository.save(foundClub);
  }

  /**
   * Removes the specified club from the repository.
   * @param id The ID of the club to remove.
   */
  public async remove(id: string): Promise<boolean> {
    await this.clubRepository.delete(id);
    return true;
  }

}
