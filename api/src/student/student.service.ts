import { Injectable } from "@nestjs/common";
import { Student } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly usersRepository: Repository<Student>
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = new Student();
    student.stars = createStudentDto.stars;
    student.points = createStudentDto.points;
    student.school = createStudentDto.school;
    student.class = createStudentDto.class;

    return this.usersRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
