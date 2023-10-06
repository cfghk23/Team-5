import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TimeDeposit } from "./time-deposit.entity";
import { Repository } from "typeorm";
import { CreateTimeDepositDto } from "./dto/create-time-deposit.dto";

@Injectable()
export class TimeDepositService {
  constructor(
    @InjectRepository(TimeDeposit)
    private readonly timeDepositRepository: Repository<TimeDeposit>
  ) {}

  create(createTimeDepositDto: CreateTimeDepositDto): Promise<TimeDeposit> {
    const timeDeposit = new TimeDeposit();
    timeDeposit.uuid = createTimeDepositDto.uuid;
    timeDeposit.amount = createTimeDepositDto.amount;
    timeDeposit.endAmount = createTimeDepositDto.endAmount;
    timeDeposit.startDate = createTimeDepositDto.startDate;
    timeDeposit.endDate = createTimeDepositDto.endDate;
    timeDeposit.status = createTimeDepositDto.status;

    return this.timeDepositRepository.save(timeDeposit);
  }

  async findAll(): Promise<TimeDeposit[]> {
    return this.timeDepositRepository.find();
  }

  findOne(id: number): Promise<TimeDeposit> {
    return this.timeDepositRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.timeDepositRepository.delete(id);
  }
}
