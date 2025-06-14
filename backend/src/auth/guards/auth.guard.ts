import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class PassportLocalGuard extends AuthGuard('local') {}

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private jwtService: JwtService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const authorization = request.headers.authorization;
//     const token = authorization?.split(' ')[1];

//     if (!token) {
//       throw new UnauthorizedException();
//     }

//     try {
//       const tokenPayload = await this.jwtService.verifyAsync<{
//         sub: string;
//         username: string;
//       }>(token);
//       request.user = {
//         userId: tokenPayload.sub,
//         username: tokenPayload.username,
//       };
//       return true;
//     } catch (error) {
//       throw new UnauthorizedException();
//     }
//   }
// }
