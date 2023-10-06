import { Body, Controller, Post, Get, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TimeDepositService } from './time-deposit.service';
import { CreateTimeDepositDto } from './dto/create-time-deposit.dto';
import { TimeDeposit } from './time-deposit.entity';
@ApiTags("timedeposit")
@Controller('timedeposit')
export class TimeDepositController {
    constructor(private readonly timeDepositService: TimeDepositService) {}

  @Post()
  create(@Body() createTimeDepositDto: CreateTimeDepositDto): Promise<TimeDeposit> {
    return this.timeDepositService.create(createTimeDepositDto);
  }

  @Get()
  findAll(): Promise<TimeDeposit[]> {
    return this.timeDepositService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<TimeDeposit> {
    return this.timeDepositService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.timeDepositService.remove(id);
  }
}
