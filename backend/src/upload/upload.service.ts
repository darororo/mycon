import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'minio';
import { InjectMinio } from 'nestjs-minio';

@Injectable()
export class UploadService {
  constructor(@InjectMinio() private readonly minioClient: Client) {}

  async uploadImage(file: Express.Multer.File) {
    if (!file) {
      throw new NotFoundException();
    }

    return this.minioClient.putObject('mycon', file.originalname, file.buffer);
  }
}
