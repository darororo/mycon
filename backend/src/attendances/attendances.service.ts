import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    const attendance = await this.attendanceRepo.find();
    if (!attendance) {
      throw new HttpException('Attendance list is empty', 404);
    }
    return attendance;
  }

  async findOne(projectId: number, id: number) {
    const attendance = await this.attendanceRepo.findOne({
      where: { id, project: { id: projectId } },
      relations: ['project', 'worker'],
    });

    if (!attendance) {
      throw new NotFoundException(`Attendance with id ${id} not found`);
    }
    return attendance;
  }

  async update(
    id: number,
    projectId: number,
    updateAttendanceDto: UpdateAttendanceDto,
  ): Promise<Attendance> {
    const attendance = await this.findOne(id, projectId);
    Object.assign(attendance, updateAttendanceDto);
    return this.attendanceRepo.save(attendance);
  }

  async remove(id: number, projectId: number) {
    const attendance = await this.findOne(id, projectId);
    return this.attendanceRepo.remove(attendance);
  }
}
