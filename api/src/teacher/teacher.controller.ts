import { Body, Controller, Post, Get, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './teacher.entity';

@ApiTags("teacher")
@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @Post()
    create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
      return this.teacherService.create(createTeacherDto);
    }
  
    @Get()
    findAll(): Promise<Teacher[]> {
      return this.teacherService.findAll();
    }
  
    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number): Promise<Teacher> {
      return this.teacherService.findOne(id);
    }
  
    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
      return this.teacherService.remove(id);
    }
}
