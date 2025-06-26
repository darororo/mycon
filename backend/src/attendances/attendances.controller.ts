import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendancesService.create(createAttendanceDto);
  }

  @Get()
  findAll() {
    return this.attendancesService.findAll();
  }

  @Get(':id/projects/:projectId')
  findOne(@Param('id') id: string, @Param('projectId') projectId: string) {
    return this.attendancesService.findOne(+projectId, +id);
  }

  @Patch(':id/projects/:projectId')
  update(
    @Param('projectId') projectId: string,
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.attendancesService.update(+projectId, +id, updateAttendanceDto);
  }

  @Delete(':id/projects/:projectId')
  remove(@Param('id') id: string, @Param('projectId') projectId: string) {
    return this.attendancesService.remove(+projectId, +id);
  }
}
