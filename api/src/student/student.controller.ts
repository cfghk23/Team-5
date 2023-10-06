import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Delete,
} from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("student")
@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.studentService.remove(id);
  }
}
