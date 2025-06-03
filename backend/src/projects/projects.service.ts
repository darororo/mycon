import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.save(createProjectDto);
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
