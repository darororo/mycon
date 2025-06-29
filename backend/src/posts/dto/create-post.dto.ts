import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  description: string;
  //   photos: string[]; // name of the photos

  @IsNumber()
  userId: number;
}
