import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'minio';
import { InjectMinio } from 'nestjs-minio';
import * as sharp from 'sharp';

@Injectable()
export class UploadService {
  constructor(@InjectMinio() private readonly minioClient: Client) {}

  async uploadImage(file: Express.Multer.File) {
    if (!file) {
      throw new NotFoundException();
    }

    const smallImg = this.resizeImageToSmall(file.buffer);
    const smallImgPath = 'small/' + file.originalname;

    await this.minioClient.putObject('mycon', smallImgPath, smallImg);

    return this.minioClient.putObject('mycon', file.originalname, file.buffer);
  }

  resizeImageToSmall(imgBuffer: Buffer) {
    return sharp(imgBuffer).resize({ width: 300 });
  }
}
