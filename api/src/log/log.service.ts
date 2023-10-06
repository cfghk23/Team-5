import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './log.entity';
import { Repository } from 'typeorm';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(Log)
        private readonly studentRepository: Repository<Log>
      ) {}
    
      create(createLogDto: CreateLogDto): Promise<Log> {
        const log = new Log();
        log.timestamp = createLogDto.timestamp;
        log.points = createLogDto.points;
        log.school = createLogDto.school;
        log.class = createLogDto.class;
    
        return this.studentRepository.save(log);
      }
    
      async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
      }
    
      findOne(id: number): Promise<Student> {
        return this.studentRepository.findOneBy({ id: id });
      }
    
      async remove(id: string): Promise<void> {
        await this.studentRepository.delete(id);
      }
}
