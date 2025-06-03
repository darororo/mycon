import { IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;
}
