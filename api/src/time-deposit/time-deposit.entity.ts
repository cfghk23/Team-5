import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TimeDeposit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  uuid: string;
  @Column()
  amount: number;

  @Column()
  endAmount: number;

  @Column()
  startDate: string;
  @Column()
  endDate: string
  @Column()
  status: string
}
