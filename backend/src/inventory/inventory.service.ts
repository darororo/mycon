import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventoryService {
  constructor (
    @InjectRepository(Inventory) private readonly invenRepo: Repository<Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const inventory = this.invenRepo.create(createInventoryDto);
    return this.invenRepo.save(inventory);
  }

  async findAll(): Promise<Inventory[]> {
    const inventory = await this.invenRepo.find();
    if(!inventory) {
      throw new HttpException('Inventory list is empty', 404);
    }
    return inventory;
  }

  async findOne(id: number): Promise<Inventory> {
    const inventory = await this.invenRepo.findOne({where: {id}})
    if(!inventory) {
      throw new NotFoundException(`Inventory with id ${id} not found`);
    }
    return inventory;
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto): Promise<Inventory> {
    const inventory = await this.findOne(id);
    Object.assign(inventory, updateInventoryDto);
    return this.invenRepo.save(inventory);
  }

  async remove(id: number): Promise<Inventory> {
    const inventory = await this.findOne(id);
    return this.invenRepo.remove(inventory);
  }
}
