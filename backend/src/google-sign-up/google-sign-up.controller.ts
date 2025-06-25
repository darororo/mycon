import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  BadRequestException,
  Get,
  Res,
} from '@nestjs/common';
import { GoogleSignUpService } from './google-sign-up.service';
import { SkipThrottle } from '@nestjs/throttler';
import { Response } from 'express';

export class GoogleRegisterDto {
  idToken: string;
}

@SkipThrottle()
@Controller('google-sign-up')
export class GoogleSignUpController {
  constructor(private readonly googleSignUpService: GoogleSignUpService) {}

  @Post()
  // @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: GoogleRegisterDto, @Res() response: Response) {
    const { idToken } = body;

    if (!idToken) {
      throw new BadRequestException('Google ID token is required');
    }

    const user = await this.googleSignUpService.registerWithGoogle(
      idToken,
      response,
    );

    return {
      success: true,
      message: 'User registered successfully',
      data: user,
    };
  }
}
