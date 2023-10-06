import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeDeposit } from './time-deposit.entity';
import { Repository } from 'typeorm';
import { CreateTimeDepositDto } from './dto/create-time-deposit.dto';

@Injectable()
export class TimeDepositService {
    constructor(
        @InjectRepository(TimeDeposit)
        private readonly timeDepositRepository: Repository<TimeDeposit>,
      ) {}
    
      create(createTimeDepositDto: CreateTimeDepositDto): Promise<TimeDeposit> {
        const timeDeposit = new TimeDeposit();
        timeDeposit.uuid = createTimeDepositDto.uuid;
        timeDeposit.amount = createTimeDepositDto.amount;
        timeDeposit.endAmount = createTimeDepositDto.endAmount;
        timeDeposit.startDate = createTimeDepositDto.startDate;
        timeDeposit.endDate = createTimeDepositDto.endDate;
    
        return this.usersRepository.save(user);
      }
    
      async findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id: id });
      }
    
      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
