import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import Setting from './entity/setting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UpdateSettingDto from './dto/setting.update.dto';

@Injectable()
export class SettingService {

  constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) {
  }

  public async create(setting: Setting): Promise<Setting> {
    await this.checkIfSettingAlreadyExists(setting);
    return await this.settingRepository.save(setting);
  }

  public async findAll(): Promise<Setting[]> {
    return await this.settingRepository.find();
  }

  public async findOne(id: string): Promise<Setting> {
    let setting = await this.settingRepository.findOneBy({id: id});
    if(setting == null) {
      throw new NotFoundException('Instelling kan niet gevonden worden');
    }
    return setting;
  }

  public async update(id: string, setting: UpdateSettingDto): Promise<Setting> {
    let foundSetting = await this.findOne(id);
    foundSetting.description = setting.description;
    foundSetting.value = setting.value;
    return await this.settingRepository.save(foundSetting);
  }

  public async remove(id: string): Promise<boolean> {
    await this.settingRepository.delete(id);
    return true;
  }

  private async checkIfSettingAlreadyExists(setting: Setting) {
    let foundSetting = await this.settingRepository.findOneBy({title: setting.title})
    if(foundSetting != null) {
      throw new BadRequestException('Setting already exists!');
    }
  }
}
