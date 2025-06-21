import { Module } from '@nestjs/common';
import { GoogleSignUpController } from './google-sign-up.controller';
import { GoogleSignUpService } from './google-sign-up.service';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [GoogleSignUpController],
  providers: [GoogleSignUpService],
  exports: [GoogleSignUpService]
})
export class GoogleSignUpModule { }
