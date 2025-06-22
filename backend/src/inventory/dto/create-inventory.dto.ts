import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { QuantityUnit } from '../enum/unit.enum';

export class CreateInventoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsEnum(QuantityUnit)
  @IsNotEmpty()
  unit: QuantityUnit;
}
