import { Module } from '@nestjs/common';
import { TimeDepositService } from './time-deposit.service';
import { TimeDepositController } from './time-deposit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeDeposit } from './time-deposit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeDeposit])],
  providers: [TimeDepositService],
  controllers: [TimeDepositController]
})
export class TimeDepositModule {}
