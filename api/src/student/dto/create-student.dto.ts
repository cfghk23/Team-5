import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {
  stars: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  points: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  school: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  class: string;
}
