import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventoryService {
  constructor (
    @InjectRepository(Inventory) private readonly inventoryRepository: Repository <Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto) {
    const inventory = this.inventoryRepository.create(createInventoryDto);
    return this.inventoryRepository.save(inventory);
  }

  async findAll() {
    return this.inventoryRepository.find({relations: ['projects']});
  }

  async findOne(id: number) {
    const inventory = await this.inventoryRepository.findOne({where: {id}, relations: ['projects'] })
    if(!inventory) {
      throw new NotFoundException(`Inventory with id ${id} not found`);
    }
    return inventory;
  }

  async update(id: number, updateInventoryDto: Partial<Inventory>) {
    await this.inventoryRepository.update(id, updateInventoryDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.inventoryRepository.delete(id);
  }
}
