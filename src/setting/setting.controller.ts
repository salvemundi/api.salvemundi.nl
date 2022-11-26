import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import UpdateSettingDto from './dto/setting.update.dto';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get()
  public async findAll() {
    return await this.settingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settingService.findOne(id);
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() setting: UpdateSettingDto) {
    return await this.settingService.update(id, setting);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.settingService.remove(id);
  }
}
