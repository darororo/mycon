import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { WorkerRole } from '../enums/worker-role.enum';
import { Gender } from 'src/common/enums/gender.enum';

export class CreateWorkerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsEnum(WorkerRole)
  role: WorkerRole;

  @IsNumber()
  hourlyRate: number;

  @IsOptional()
  @IsNumber()
  projectId: number;
}
