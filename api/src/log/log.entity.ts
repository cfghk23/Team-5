import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: string;

  @Column()
  points: number;

  @Column()
  school: string;

  @Column()
  class: string;
}
