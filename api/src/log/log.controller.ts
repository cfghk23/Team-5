import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Delete,
} from "@nestjs/common";
import { LogService } from "./log.service";
import { CreateLogDto } from "./dto/create-log.dto";
import { StudentService } from "src/student/student.service";
import { ApiTags } from "@nestjs/swagger";
import { Log } from "./log.entity";

@ApiTags("log")
@Controller("log")
export class LogController {
  constructor(
    private readonly logService: LogService,
    private readonly studentService: StudentService
  ) {}

  @Post()
  async create(@Body() createLogDto: CreateLogDto): Promise<Log> {
    const { student_id, stars, points } = createLogDto;
    if (stars) {
      await this.studentService.addStars(student_id, stars);
    }

    if (points) {
      await this.studentService.addPoints(student_id, points);
    }

    return this.logService.create(createLogDto);
  }

  @Get()
  findAll(): Promise<Log[]> {
    return this.logService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Log> {
    return this.logService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.logService.remove(id);
  }
}
