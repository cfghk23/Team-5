import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  log_id: number;

  @Column()
  student_id: number;

  @Column()
  timestamp: string;

  @Column()
  points: number;

  @Column()
  stars: number;

  @Column()
  school: string;

  @Column()
  class: string;
}
