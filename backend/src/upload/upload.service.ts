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

  uploadImages(files: Express.Multer.File[]) {
    if (!files) {
      throw new NotFoundException();
    }

    const smallImageList: sharp.Sharp[] = [];
    const smallImagePathList: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const smallImg = this.resizeImageToSmall(files[i].buffer);
      const smallImgPath = 'small/' + files[i].originalname;

      smallImageList.push(smallImg);
      smallImagePathList.push(smallImgPath);
    }

    const uploadResults: Promise<any>[] = [];

    for (let i = 0; i < files.length; i++) {
      uploadResults.push(
        this.minioClient.putObject(
          'mycon',
          files[i].originalname,
          files[i].buffer,
        ),
      );
      uploadResults.push(
        this.minioClient.putObject(
          'mycon',
          smallImagePathList[i],
          smallImageList[i],
        ),
      );
    }

    return uploadResults;
  }

  resizeImageToSmall(imgBuffer: Buffer) {
    return sharp(imgBuffer).resize({ width: 300 });
  }
}
