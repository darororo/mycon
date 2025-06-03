import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Repository } from 'typeorm';
import { Worker } from './entities/worker.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Worker)
    private readonly workerRepository: Repository<Worker>,
  ) {}

  async create(createWorkerDto: CreateWorkerDto): Promise<Worker> {
    return this.workerRepository.save(createWorkerDto);
  }

  async findAll(): Promise<Worker[]> {
    return this.workerRepository.find();
  }

  async findOne(id: number): Promise<Worker> {
    const worker = await this.workerRepository.findOne({
      where: { id },
      relations: { projects: true }, // for cascade effect with save and remove operations
    });
    if (!worker) {
      throw new HttpException(
        `Worker id: ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return worker;
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto): Promise<Worker> {
    const worker = await this.findOne(id);

    Object.assign(worker, updateWorkerDto);

    return this.workerRepository.save(worker);
  }

  async remove(id: number) {
    const worker = await this.findOne(id);
    return this.workerRepository.remove(worker);
  }
}
