import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payroll } from './entities/payroll.entity';
import { WorkersModule } from 'src/workers/workers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payroll]), WorkersModule],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}
