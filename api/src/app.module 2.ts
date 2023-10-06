import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudentModule } from './student/student.module';

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
  ],
})
export class AppModule {}
