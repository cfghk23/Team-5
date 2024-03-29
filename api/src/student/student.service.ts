import { Injectable } from "@nestjs/common";
import { Student } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = new Student();
    student.stars = createStudentDto.stars;
    student.points = createStudentDto.points;
    student.school = createStudentDto.school;
    student.class = createStudentDto.class;

    return this.studentRepository.save(student);
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

  async addStars(id: number, stars: number) {
    const student = await this.findOne(id);
    const currentStars = student.stars;
    await this.studentRepository.save({ id: id, stars: currentStars + stars });
  }

  async addPoints(id: number, points: number) {
    const student = await this.findOne(id);
    const currentPoints = student.points;
    await this.studentRepository.save({
      id: id,
      points: currentPoints + points,
    });
  }
}
