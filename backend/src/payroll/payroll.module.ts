import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payroll } from './entities/payroll.entity';
import { WorkersModule } from 'src/workers/workers.module';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payroll]), WorkersModule, ProjectsModule],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}
