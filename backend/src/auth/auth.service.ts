import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResult, SignInData } from './types/auth-data.type';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
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

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      username: user.username,
      userId: user.userId,
    };
  }
}
