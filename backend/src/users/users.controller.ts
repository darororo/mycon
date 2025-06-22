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
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SkipThrottle } from '@nestjs/throttler';
import { ParseJsonPipe } from 'src/common/pipes/parse-json.pipe';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtRefreshAuthGuard } from 'src/auth/guards/jwt-refresh-auth.guard';

@SkipThrottle()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
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
