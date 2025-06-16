import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectPhoto } from './entities/project-photo.entity';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(ProjectPhoto)
    private readonly photoRepo: Repository<ProjectPhoto>,
    private readonly uploadService: UploadService,
  ) {}

  async create(
    createProjectDto: CreateProjectDto,
    files: Express.Multer.File[],
  ) {
    const project = this.projectRepository.create(createProjectDto);

    if (files) {
      const pathPrefix = 'projects/';

      const { original, small } = this.uploadService.uploadImages(files, {
        prefix: pathPrefix,
      });

      const imgOriginal = await Promise.all(original);
      const imgSmall = await Promise.all(small);

      const photos: ProjectPhoto[] = [];

      for (let i = 0; i < files.length; i++) {
        const fileName = files[i].originalname;

        const photoData = this.photoRepo.create();
        photoData.url = pathPrefix + 'original/' + fileName;
        photoData.thumbnail = pathPrefix + 'small/' + fileName;

        const photo = await this.photoRepo.save(photoData);
        photos.push(photo);
      }
      project.photos = photos;
    }
    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findOne(id: number) {
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw NotFoundException;
    }

    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);
    Object.assign(project, updateProjectDto);

    return project;
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    return this.projectRepository.remove(project);
  }
}
