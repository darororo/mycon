import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payroll } from './entities/payroll.entity';
import { Repository } from 'typeorm';
import { WorkersService } from 'src/workers/workers.service';
import { ProjectsService } from 'src/projects/projects.service';
@Injectable()
export class PayrollService {
  constructor(
    @InjectRepository(Payroll)
    private readonly payrollRepo: Repository<Payroll>,

    private readonly workerService: WorkersService,
    private readonly projectService: ProjectsService,
  ) {}

  async create(createPayrollDto: CreatePayrollDto): Promise<Payroll> {
    const worker = await this.workerService.findOne(createPayrollDto.workerId);
    const project = await this.projectService.findOne(
      createPayrollDto.projectId,
    );
    const { hourlyRate, totalHours } = createPayrollDto;

    const payroll = this.payrollRepo.create({
      worker,
      project,
      hourlyRate,
      totalHours,
    });

    return this.payrollRepo.save(payroll);
  }

  async findAll() {
    const payroll = await this.payrollRepo.find();
    if (!payroll) {
      throw new HttpException(`Payroll list is empty`, 404);
    }
    return payroll;
  }

  async findOne(id: number) {
    const payroll = await this.payrollRepo.findOne({ where: { id } });
    if (!payroll) {
      throw new NotFoundException(`Payroll with ID ${id} is not found`);
    }
    return payroll;
  }

  async update(
    id: number,
    updatePayrollDto: UpdatePayrollDto,
  ): Promise<Payroll> {
    const payroll = await this.findOne(id);
    Object.assign(payroll, updatePayrollDto);
    return this.payrollRepo.save(payroll);
  }

  async remove(id: number) {
    const payroll = await this.findOne(id);
    return this.payrollRepo.remove(payroll);
  }
}
