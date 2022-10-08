import { Controller, Get } from '@nestjs/common';
import { AzureService } from './azure.service';

@Controller('azure')
export class AzureController {
    constructor (private readonly azureService:AzureService) {}

    @Get('/')
    async getUsers(): Promise<String> {
        return await this.azureService.getUsersAsync();
    }
}
