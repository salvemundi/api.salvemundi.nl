import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWhatsappLinkDto } from './dto/create-whatsapp_link.dto';
import { UpdateWhatsappLinkDto } from './dto/update-whatsapp_link.dto';
import { WhatsappLink } from './entities/whatsapp_link.entity';

@Injectable()
export class WhatsappLinksService {
  constructor(@InjectRepository(WhatsappLink) private whatsappLinkRepository: Repository<WhatsappLink>) {
  }

  public async create(whatsappLink: WhatsappLink): Promise<WhatsappLink> {
    await this.checkIfWhatsappLinkAlreadyExists(whatsappLink);
    return await this.whatsappLinkRepository.save(whatsappLink);
  }

  public async findAll(): Promise<WhatsappLink[]> {
    return await this.whatsappLinkRepository.find();
  }

  public async findOne(id: string): Promise<WhatsappLink> {
    let whatsappLink = await this.whatsappLinkRepository.findOneBy({id: id});

    if(whatsappLink == null) {
      throw new NotFoundException('Whatsapp link cannot be found!');
    }

    return whatsappLink;
  }

  public async update(id: string, whatsappLink: WhatsappLink): Promise<WhatsappLink> {
    await this.whatsappLinkRepository.update(id, whatsappLink);

    return await this.findOne(id);
  }

  public async remove(id: string): Promise<void> {
    await this.whatsappLinkRepository.delete(id);
  }

  private async checkIfWhatsappLinkAlreadyExists(whatsappLink: WhatsappLink) {
    let foundWhatsappLink = await this.whatsappLinkRepository.findOneBy({link: whatsappLink.link})

    if(foundWhatsappLink != null) {
      throw new BadRequestException('Whatsapp link already exists!');
    }
  }
}
