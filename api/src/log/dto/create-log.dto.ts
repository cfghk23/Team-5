import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLogDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  student_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  timestamp: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  points: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  stars: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  school: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  class: string;
}
