import { IsNumber, IsOptional } from 'class-validator';

export class CreatePayrollDto {
  @IsNumber()
  totalHours: number;

  @IsNumber()
  hourlyRate: number;

  @IsOptional()
  @IsNumber()
  allowance?: number;

  @IsOptional()
  @IsNumber()
  deduction?: number;

  @IsNumber()
  workerId: number;
}
