import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { QuantityUnit } from "../enum/unit.enum";

export class CreateInventoryDto {
    @IsString()
    @IsNotEmpty()
    itemname: string;

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
