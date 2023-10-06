import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stars: number;

  @Column()
  points: number;

  @Column()
  school: string;

  @Column()
  class: string;
}
