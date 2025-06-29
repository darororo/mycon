import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipe,
  FileTypeValidator,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ParseJsonPipe } from 'src/common/pipes/parse-json.pipe';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/' })],
        fileIsRequired: false,
      }),
    )
    files: Express.Multer.File[],
    @Body(
      'jsonData',
      new ParseJsonPipe(),
      new ValidationPipe({ whitelist: true }),
    )
    createProjectDto: CreateProjectDto,
  ) {
    console.log(files);
    return this.projectsService.create(createProjectDto, files);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id/workers')
  findWorker(@Param('id') id: number) {
    return this.projectsService.getWorkersByProject(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('files'))
  update(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/' })],
        fileIsRequired: false,
      }),
    )
    files: Express.Multer.File[],
    @Param('id') id: number,
    @Body(
      'jsonData',
      new ParseJsonPipe(),
      new ValidationPipe({ whitelist: true }),
    )
    updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, updateProjectDto, files);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
