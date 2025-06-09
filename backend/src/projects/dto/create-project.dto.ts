import { IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  location: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;
}
