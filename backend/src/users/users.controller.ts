import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  ParseFilePipe,
  FileTypeValidator,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SkipThrottle } from '@nestjs/throttler';
import { ParseJsonPipe } from 'src/common/pipes/parse-json.pipe';
import { FilesInterceptor } from '@nestjs/platform-express';

@SkipThrottle()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('files'))
  update(
    @Param('id') id: number,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/' })],
        fileIsRequired: false,
      }),
    )
    files: Express.Multer.File[],
    @Body(
      'jsonData',
      new ParseJsonPipe(),
      new ValidationPipe({ whitelist: true }),
    )
    updateUserDto: UpdateUserDto,
  ) {
    console.log(id);
    console.log(updateUserDto);
    console.log(files);
    return this.usersService.update(id, updateUserDto, files);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
