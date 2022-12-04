import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UpdateDiscordLinkDto from './dto/update-link.dto';
import DiscordLink from './entity/discord_link.entity';

@Injectable()
export class DiscordLinkService {
  constructor(@InjectRepository(DiscordLink) private discordLinkRepository: Repository<DiscordLink>) {
    /* .. empty constructor .. */
  }

  /**
   * Creates a discord link.
   * @param dlink The club to create.
   * @returns The created club.
   */
  public async create(dlink: DiscordLink): Promise<DiscordLink> {
    return await this.discordLinkRepository.save(dlink);
  }

  /**
   * Gets all registered discord links.
   * @returns An array of registered discord links.
   */
  public async findAll(): Promise<DiscordLink[]> {
    return await this.discordLinkRepository.find();
  }


  public async findOne(id: string): Promise<DiscordLink> {
    let club = await this.discordLinkRepository.findOneBy({id: id});
    
    if(club == null) {
      throw new NotFoundException('Discord link could not be found');
    }

    return club;
  }

  /**
   * Updates the specified discord link.
   * @param id The ID of the discord link to update.
   * @param linkProps The discord link properties to update.
   * @returns The updated discord link.
   */
  public async update(id: string, linkProps: UpdateDiscordLinkDto): Promise<DiscordLink> {
    let foundLink = await this.findOne(id);
    
    foundLink.link = linkProps.link;

    return await this.discordLinkRepository.save(foundLink);
  }

  /**
   * Removes the specified discord link from the repository.
   * @param id The ID of the link to remove.
   */
  public async remove(id: string): Promise<boolean> {
    await this.discordLinkRepository.delete(id);
    return true;
  }

}
