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
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(ProjectPhoto)
    private readonly photoRepo: Repository<ProjectPhoto>,
    private readonly uploadService: UploadService,
    private readonly userService: UsersService,
  ) {}

  async create(
    createProjectDto: CreateProjectDto,
    files: Express.Multer.File[],
  ) {
    const { clientId, ...projectData } = createProjectDto;

    const client = await this.userService.findOne(clientId);

    const project = this.projectRepository.create(projectData);
    project.client = client;

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
    return this.projectRepository.find({
      relations: {
        photos: true,
        client: true,
        workers: true,
        attendance: true,
      },
    });
  }

  async findOne(id: number) {
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: { photos: true, client: true, workers: true },
    });
    if (!project) {
      throw NotFoundException;
    }

    return project;
  }

  async getWorkersByProject(projectId: number) {
    const project = await this.findOne(projectId);
    return project.workers;
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
    files: Express.Multer.File[],
  ) {
    const project = await this.findOne(id);
    Object.assign(project, updateProjectDto);

    if (files && files.length > 0) {
      const pathPrefix = 'projects/';

      // const { original, small } = this.uploadService.uploadImages(files, {
      //   prefix: pathPrefix,
      // });

      const newPhotos: ProjectPhoto[] = [];

      if (project.photos?.length > 0) {
        await this.photoRepo.remove(project.photos);
      }

      for (let i = 0; i < files.length; i++) {
        const fileName = files[i].originalname;

        const newPhotoData = this.photoRepo.create();
        newPhotoData.url = pathPrefix + 'original/' + fileName;
        newPhotoData.thumbnail = pathPrefix + 'small/' + fileName;

        const photo = await this.photoRepo.save(newPhotoData);
        newPhotos.push(photo);
      }
      project.photos = newPhotos;
    }

    return this.projectRepository.save(project);
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    return this.projectRepository.remove(project);
  }
}
