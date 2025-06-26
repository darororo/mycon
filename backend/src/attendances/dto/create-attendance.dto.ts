import { IsDateString, IsNumber } from 'class-validator';

export class CreateAttendanceDto {
  @IsNumber()
  hours: number;

  @IsNumber()
  workerId: number;

  @IsNumber()
  projectId: number;

  @IsDateString()
  date: Date;
}
