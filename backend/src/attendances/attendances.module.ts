import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { WorkersModule } from 'src/workers/workers.module';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendance]),
    ProjectsModule,
    WorkersModule,
  ],
  exports: [],
  controllers: [AttendancesController],
  providers: [AttendancesService],
})
export class AttendancesModule {}
