import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthInput } from './types/auth-data.type';
import { Response } from 'express';
import { PassportLocalGuard } from './guards/local-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(PassportLocalGuard)
  async login(
    @Body() authInput: AuthInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.authService.authenticate(authInput, response);
  }

  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refresh(
    @Body() authInput: AuthInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.authService.authenticate(authInput, response);
  }
}
