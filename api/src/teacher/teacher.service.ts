import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
      ) {}
    
      create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
        const teacher = new Teacher();
        teacher.name = createTeacherDto.name;
        teacher.school = createTeacherDto.school;
    
        return this.teacherRepository.save(teacher);
      }
    
      async findAll(): Promise<Teacher[]> {
        return this.teacherRepository.find();
      }
    
      findOne(id: number): Promise<Teacher> {
        return this.teacherRepository.findOneBy({ id: id });
      }
    
      async remove(id: string): Promise<void> {
        await this.teacherRepository.delete(id);
      }
}
