import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Project } from 'src/projects/entities/project.entity';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [TypeOrmModule.forFeature ([Inventory, Project])],
  exports: [TypeOrmModule],
})
export class InventoryModule {}
