import { IsEnum, IsNumber, IsString } from "class-validator";
import { QuantityUnit } from "../enum/unit.enum";

export class CreateInventoryDto {
    @IsString()
    itemname: string;

    @IsString()
    category: string;

    @IsNumber()
    quantity: number;

    @IsEnum(QuantityUnit)
    unit: QuantityUnit;
}
