import { Module } from "@nestjs/common";
import { LogService } from "./log.service";
import { LogController } from "./log.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Log } from "./log.entity";
import { Student } from "src/student/student.entity";
import { StudentService } from "src/student/student.service";

@Module({
  imports: [TypeOrmModule.forFeature([Log, Student])],
  providers: [LogService, StudentService],
  controllers: [LogController],
})
export class LogModule {}
