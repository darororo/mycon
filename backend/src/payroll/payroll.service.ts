import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payroll } from './entities/payroll.entity';
import { Repository } from 'typeorm';
import { WorkersService } from 'src/workers/workers.service';
@Injectable()
export class PayrollService {
  constructor(
    @InjectRepository(Payroll)
    private readonly payrollRepo: Repository<Payroll>,

    private readonly workerService: WorkersService,
  ) {}

  async create(
    createPayrollDto: CreatePayrollDto,
    // startDate: Date,
  ): Promise<Payroll> {
    const worker = await this.workerService.findOne(createPayrollDto.workerId);

    // const endDate = new Date(startDate);
    // endDate.setDate(startDate.getDate() + 29);
    // const hourlyRate = new

    // const totalHours = await this.calculateTotalHours(worker.id, startDate, endDate, hourlyRate)

    return this.payrollRepo.save(worker);
  }

  findAll() {
    return `This action returns all payroll`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payroll`;
  }

  update(id: number, updatePayrollDto: UpdatePayrollDto) {
    return `This action updates a #${id} payroll`;
  }

  remove(id: number) {
    return `This action removes a #${id} payroll`;
  }

  private calculateTotalHours(start: Date, end: Date, hourlyRate: number) {
    const total = this.getBusinessDaysBetween(start, end) * hourlyRate;
    return total;
  }

  private getBusinessDaysBetween(start: Date, end: Date): number {
    let count = 0;
    const current = new Date(start);

    while (current <= end) {
      const day = current.getDay(); // 0 = Sunday, 6 = Saturday
      if (day !== 0 && day !== 6) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }

    return count;
  }
}
