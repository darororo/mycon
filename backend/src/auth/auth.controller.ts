import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthInput } from './types/auth-data.type';
import { Response } from 'express';
import { PassportLocalGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // @UseGuards(PassportLocalGuard)
  login(
    @Body() createAuthDto: AuthInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.authenticate(createAuthDto, response);
  }
}
