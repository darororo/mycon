import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'minio';
import { UploadedObjectInfo } from 'minio/dist/main/internal/type';
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

  uploadImages(files: Express.Multer.File[], options: { prefix?: string }) {
    const { prefix } = options;

    if (!files) {
      throw new NotFoundException();
    }

    const smallImageList: sharp.Sharp[] = [];
    const smallImagePathList: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const smallImg = this.resizeImageToSmall(files[i].buffer);

      let smallImgPath = 'small/' + files[i].originalname;

      if (prefix) {
        smallImgPath = prefix + smallImgPath;
      }

      smallImageList.push(smallImg);
      smallImagePathList.push(smallImgPath);
    }

    const oriResult: Promise<any>[] = [];
    const smallResult: Promise<any>[] = [];

    for (let i = 0; i < files.length; i++) {
      let path = `original/${files[i].originalname}`;
      if (prefix) {
        path = prefix + path;
      }

      oriResult.push(
        this.minioClient.putObject('mycon', path, files[i].buffer),
      );
      smallResult.push(
        this.minioClient.putObject(
          'mycon',
          smallImagePathList[i],
          smallImageList[i],
        ),
      );
    }

    return { original: oriResult, small: smallResult };
  }

  resizeImageToSmall(imgBuffer: Buffer) {
    return sharp(imgBuffer).resize({ width: 300 });
  }
}
