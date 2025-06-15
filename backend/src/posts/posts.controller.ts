import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipe,
  FileTypeValidator,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ParseJsonPipe } from 'src/common/pipes/parse-json.pipe';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(
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
    createPostDto: CreatePostDto,
  ) {
    console.log(createPostDto);
    console.log(files);
    return this.postsService.create(createPostDto, files);
  }

  @Post(':id/comment')
  comment(
    @Param('id') postId: number,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.postsService.createComment(postId, createCommentDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
