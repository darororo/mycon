import { 
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() body: CreateInventoryDto) {
    return this.inventoryService.create(body);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.inventoryService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Body() body: { itemname: string; category: string; quantity: number; unit: boolean },
    @Param('id', ParseIntPipe) id:number
  ) {
    return this.inventoryService.update(id, body);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id:number ) {
    return this.inventoryService.remove(id);
  }
}
