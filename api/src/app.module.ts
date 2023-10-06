import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';
import { LogModule } from './log/log.module';
import { TeacherModule } from './teacher/teacher.module';
import { TimeDepositModule } from './time-deposit/time-deposit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    StudentModule,
    LogModule,
    TeacherModule,
    TimeDepositModule,
  ],
})
export class AppModule {}
