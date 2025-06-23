import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResult, SignInData } from './types/auth-data.type';
import { compare } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { TokenPayload } from './interfaces/token-payload.interface';

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
      const user = await this.userService.findByEmail(input.email);
      const authenticated = await compare(input.password, user.password);
      if (!authenticated) {
        throw new UnauthorizedException();
      }
      return {
        username: user.username,
        userId: user.id,
        email: user.email,
      };
    } catch {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  async signIn(user: SignInData, response: Response): Promise<AuthResult> {
    const tokenPayload: TokenPayload = {
      userId: user.userId,
      // username: user.username,
      // email: user.email,
    };

    // console.log(response);

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

    await this.userService.setAndHashRefreshToken(user.userId, refreshToken);

    response.cookie('Authentication', accessToken, {
      httpOnly: true,
      secure: true,
      expires: expiresAccessToken,
      sameSite: 'none',
    });

    response.cookie('Refresh', refreshToken, {
      httpOnly: true,
      secure: false,
      expires: expiresRefreshToken,
      sameSite: 'none',
    });

    return {
      email: user.email,
      username: user.username,
      userId: user.userId,
      // success: true,
    };
  }

  async verifyUserRefreshToken(refreshToken: string, userId: number) {
    console.log('verify user refresh token');
    console.log(refreshToken);
    console.log(userId);
    try {
      const user = await this.userService.findOne(userId);
      const authenticated = await compare(refreshToken, user.refreshToken);
      if (!authenticated) {
        throw new UnauthorizedException();
      }
      const { email, username, id } = user;

      return { email, username, id };
    } catch (err) {
      throw new UnauthorizedException('Refresh token is not valid');
    }
  }
}
