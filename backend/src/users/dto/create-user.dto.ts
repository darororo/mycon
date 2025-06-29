import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { UserRole } from '../enums/role.enum';
import { Gender } from 'src/common/enums/gender.enum';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsEnum(UserRole)
  role: UserRole;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  // add new
  @IsOptional()
  @IsString()
  phone?: string;

  // add new
  @IsOptional()
  @IsString()
  address?: string;
}
