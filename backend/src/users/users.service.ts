import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserPhoto } from './entities/user-photo.entity';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserPhoto)
    private readonly photoRepository: Repository<UserPhoto>,
    private readonly uploadService: UploadService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const emailExist = await this.userRepository
      .createQueryBuilder('user')
      .where({ ['email']: createUserDto.email })
      .getExists();

    if (emailExist) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }

    // const user = this.userRepository.create(createUserDto);

    // if (files) {
    //   const pathPrefix = 'users/';

    //   const { original, small } = this.uploadService.uploadImages(files, {
    //     prefix: pathPrefix,
    //   });
    //   const imgOriginal = await Promise.all(original);
    //   const imgSmall = await Promise.all(small);

    //   const photos: UserPhoto[] = [];
    //   for (let i = 0; i < files.length; i++) {
    //     const fileName = files[i].originalname;

    //     const photoData = this.photoRepository.create();
    //     photoData.url = pathPrefix + 'original/' + fileName;
    //     photoData.thumbnail = pathPrefix + 'small/' + fileName;

    //     const photo = await this.photoRepository.save(photoData);
    //     photos.push(photo);
    //   }
    //   user.photos = photos;
    // }

    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    if (!users) {
      throw new HttpException('User list is empty', 404);
    }

    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw NotFoundException;
    }

    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    files: Express.Multer.File[],
  ): Promise<User> {
    const user = await this.findOne(id);

    if (files) {
      const pathPrefix = `users/user-${id}/`;

      const { original, small } = this.uploadService.uploadImages(files, {
        prefix: pathPrefix,
      });
      const imgOriginal = await Promise.all(original);
      const imgSmall = await Promise.all(small);

      const photos: UserPhoto[] = [];
      for (let i = 0; i < files.length; i++) {
        const fileName = files[i].originalname;

        const photoData = this.photoRepository.create();
        photoData.url = pathPrefix + 'original/' + fileName;
        photoData.thumbnail = pathPrefix + 'small/' + fileName;

        const photo = await this.photoRepository.save(photoData);
        photos.push(photo);
      }
      user.photos = photos;
    }

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
