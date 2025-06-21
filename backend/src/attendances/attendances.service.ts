import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { Repository } from 'typeorm';
import { WorkersService } from 'src/workers/workers.service';
import { ProjectsService } from 'src/projects/projects.service';

@Injectable()
export class AttendancesService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepo: Repository<Attendance>,

    private readonly workerService: WorkersService,

    private readonly projectService: ProjectsService,
  ) {}
  async create(createAttendanceDto: CreateAttendanceDto) {
    const { workerId, projectId } = createAttendanceDto;
    const attendance = this.attendanceRepo.create(createAttendanceDto);

    const worker = await this.workerService.findOne(workerId);
    const project = await this.projectService.findOne(projectId);

    attendance.worker = worker;
    attendance.project = project;

    return this.attendanceRepo.save(attendance);
  }

  findAll() {
    return `This action returns all attendances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
