import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Log } from "./log.entity";
import { Repository } from "typeorm";
import { CreateLogDto } from "./dto/create-log.dto";

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>
  ) {}

  create(createLogDto: CreateLogDto): Promise<Log> {
    const log = new Log();
    log.student_id = createLogDto.student_id;
    log.timestamp = createLogDto.timestamp;
    log.points = createLogDto.points;
    log.stars = createLogDto.stars;
    log.school = createLogDto.school;
    log.class = createLogDto.class;

    return this.logRepository.save(log);
  }

  async findAll(): Promise<Log[]> {
    return this.logRepository.find();
  }

  findOne(id: number): Promise<Log> {
    return this.logRepository.findOneBy({ log_id: id });
  }

  async remove(log_id: string): Promise<void> {
    await this.logRepository.delete(log_id);
  }
}
