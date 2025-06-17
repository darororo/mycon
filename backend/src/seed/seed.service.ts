import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Gender } from '../common/enums/gender.enum';
import { Manager } from '../managers/entities/manager.entity';
import { Project } from '../projects/entities/project.entity';
import { Worker } from '../workers/entities/worker.entity';
import { DataSource } from 'typeorm';
import { UserRole } from 'src/users/enums/role.enum';

@Injectable()
export class SeedService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Manager)
    private readonly managerRepository: Repository<Manager>,
    @InjectRepository(Worker)
    private readonly workerRepository: Repository<Worker>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async run() {
    //Clear existing data
    await this.dataSource.query(`
      TRUNCATE TABLE 
        "inventory", 
        "project", 
        "worker", 
        "manager", 
        "user" 
      RESTART IDENTITY CASCADE
    `);

    //Seeding new data
    const users = [
      {
        username: 'Super Admin',
        firstName: 'owner',
        lastName: 'owner',
        role: UserRole.Owner,
        gender: Gender.Male,
        email: 'admin@gmail.com',
        password: 'Admin123$',
      },

      {
        username: 'Manager',
        firstName: 'manager',
        lastName: 'manager',
        role: UserRole.Manager,
        gender: Gender.Male,
        email: 'manager@gmail.com',
        password: 'Manager123$',
      },

      {
        username: 'Joker',
        firstName: 'Ren',
        lastName: 'Amamiya',
        role: UserRole.Owner,
        gender: Gender.Male,
        email: 'persona5@gmail.com',
        password: 'P5x123$%',
      },

      {
        username: 'Ash',
        firstName: 'Ash',
        lastName: 'Ketchum',
        gender: Gender.Male,
        email: 'pokemon@gmail.com',
        password: 'P5x123$%',
      },

      {
        username: 'Door-kun',
        firstName: 'Minato',
        lastName: 'Arisato',
        gender: Gender.Male,
        email: 'persona3@gmail.com',
        password: 'P5x123$%',
      },

      {
        username: 'Kirito',
        firstName: 'Kazuto',
        lastName: 'Kirigaya',
        gender: Gender.Male,
        email: 'sao@gmail.com',
        password: 'P5x123$%',
      },

      {
        username: 'Hachiman',
        firstName: 'Hachiman',
        lastName: 'Hikigaya',
        gender: Gender.Male,
        email: 'oreguira@gmail.com',
        password: 'P5x123$%',
      },

      {
        username: 'Chad',
        firstName: 'Yuu',
        lastName: 'Narukami',
        gender: Gender.Male,
        email: 'persona4@gmail.com',
        password: 'P5x123$%',
      },
    ];

    const projects = [
      {
        name: 'House1',
        description: 'A very fancy house.',
        price: 1,
        location: 'very near',
        longtitude: 123,
        latitude: 321,
      },

      {
        name: 'House2',
        description: 'A very fancy house.',
        price: 1,
        location: 'very near',
        longtitude: 123,
        latitude: 321,
      },

      {
        name: 'House3',
        description: 'A very fancy house.',
        price: 1,
        location: 'very near',
        longtitude: 123,
        latitude: 321,
      },

      {
        name: 'House4',
        description: 'A very fancy house.',
        price: 1,
        location: 'very near',
        longtitude: 123,
        latitude: 321,
      },

      {
        name: 'House5',
        description: 'A very fancy house.',
        price: 1,
        location: 'very near',
        longtitude: 123,
        latitude: 321,
      },
    ];

    await this.userRepository.save(users);
    await this.projectRepository.save(projects);
  }
}
