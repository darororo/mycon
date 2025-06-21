import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResult, SignInData } from './types/auth-data.type';
import { compare } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async authenticate(
    input: AuthInput,
    response: Response,
  ): Promise<AuthResult> {
    const user = await this.validateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user, response);
  }
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    try {
      const user = await this.userService.findOne(input.userId);
      const authenticated = await compare(input.password, user.password);
      if (!authenticated) {
        throw new UnauthorizedException();
      }
      return {
        username: input.username,
        userId: input.userId,
      };
    } catch {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  signIn(user: SignInData, response: Response): AuthResult {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    };

    const expiresAccessToken = new Date();
    expiresAccessToken.setMilliseconds(
      expiresAccessToken.getTime() +
        parseInt(this.configService.getOrThrow<string>('JWT_EXPIRATION_MS')),
    );

    const expiresRefreshToken = new Date();
    expiresAccessToken.setMilliseconds(
      expiresAccessToken.getTime() +
        parseInt(
          this.configService.getOrThrow<string>(
            'JWT_REFRESH_TOKEN_EXPIRATION_MS',
          ),
        ),
    );

    const accessToken = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow('JWT_SECRET'),
      expiresIn: `${this.configService.getOrThrow('JWT_EXPIRATION_MS')}ms`,
    });

    const refreshToken = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: `${this.configService.getOrThrow('JWT_REFRESH_TOKEN_EXPIRATION_MS')}ms`,
    });

    response.cookie('Authentication', accessToken, {
      httpOnly: true,
      expires: expiresAccessToken,
    });

    response.cookie('Refresh', refreshToken, {
      httpOnly: true,
      expires: expiresRefreshToken,
    });

    return {
      accessToken,
      username: user.username,
      userId: user.userId,
    };
  }

  async verifyUserRefreshToken(refreshToken: string, userId: number) {
    try {
      const user = await this.userService.findOne(userId);
      const authenticated = await compare(refreshToken, user.refreshToken);
      if (!authenticated) {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new UnauthorizedException('Refresh token is not valid');
    }
  }
}
