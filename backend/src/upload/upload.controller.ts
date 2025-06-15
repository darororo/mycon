import {
  Controller,
  Post,
  ParseFilePipe,
  FileTypeValidator,
  UseInterceptors,
  HttpStatus,
  UploadedFiles,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Throttle } from '@nestjs/throttler';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Throttle({ default: { limit: 3, ttl: 600 } })
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async uploadImage(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/' })],
      }),
    )
    files: Express.Multer.File[],
  ) {
    const { original, small } = this.uploadService.uploadImages(files, {
      prefix: 'misc',
    });

    const oriUploadInfo = await Promise.all([...original]);
    const smallUploadInfo = await Promise.all([...small]);

    return {
      status: HttpStatus.CREATED,
      message: 'Files uploaded succesfully',
      data: { original: oriUploadInfo, small: smallUploadInfo },
    };
  }
}
