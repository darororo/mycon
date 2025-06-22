import { IsNumber } from 'class-validator';

export class CreateAttendanceDto {
  @IsNumber()
  hour: number;

  @IsNumber()
  workerId: number;

  @IsNumber()
  projectId: number;
}
