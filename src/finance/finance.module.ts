import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Finance from '../finance/entities/finance.entity'
import { FinanceProfile } from '../profile/finance_profile'

@Module({
  imports: [TypeOrmModule.forFeature([Finance])],
  controllers: [FinanceController],
  providers: [FinanceService, FinanceProfile]
})
export class FinanceModule {}
