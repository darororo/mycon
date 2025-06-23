import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResult, SignInData } from './types/auth-data.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) { }

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findOne(input.userId);
    if (user.password === input.password) {
      return {
        username: input.username,
        userId: input.userId,
      };
    }
    return null;
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);
    let authUser
    if (accessToken) {
      authUser = await this.userService.findOne(user.userId)
    }

    return {
      accessToken,
      username: user.username,
      userId: user.userId,
      // success: true,
      user: authUser,
    };
  }
}
