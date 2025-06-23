/* eslint-disable prettier/prettier */
import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../users/entities/user.entity';
import { UserRole } from '../users/enums/role.enum';
import * as bcrypt from 'bcrypt';
import { Gender } from 'src/common/enums/gender.enum';
import { AuthService } from 'src/auth/auth.service';
import { UserPhoto } from 'src/users/entities/user-photo.entity';

@Injectable()
export class GoogleSignUpService {
  private googleClient: OAuth2Client;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private authService: AuthService,
  ) {
    this.googleClient = new OAuth2Client(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
    );
  }

  async registerWithGoogle(idToken: string): Promise<any> {
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken,
        audience: process.env.EMAIL_CLIENT_ID,
      });

      console.log(ticket, 'tivk');

      const payload = ticket.getPayload();
      if (!payload) {
        throw new BadRequestException('Invalid Google token');
      }

      // Check if user exists
      const existingUser = await this.userRepository.findOne({
        where: { email: payload.email },
      });

      if (existingUser) {
        const signData = {
          userId: existingUser.id,
          username: existingUser.username,
        };
        return this.authService.signIn(signData);
      }

      // Generate password first (await the Promise)
      const hashedPassword = await this.generateRandomPassword();

      const photos: UserPhoto[] = [];
      const photoData = this.photoRepository.create();
      photoData.url = payload.picture || '';
      photoData.thumbnail = payload.picture || '';

      const photo = await this.photoRepository.save(photoData);
      photos.push(photo);

      // Create new user - make sure all required fields match your User entity
      const newUser = this.userRepository.create({
        email: payload.email!,
        firstName: payload.given_name || '',
        lastName: payload.family_name || '',
        username: this.generateUsername(
          payload.name || '',
          payload.email || '',
        ),
        password: hashedPassword,
        role: UserRole.Client,
        gender: Gender.Other,
        photos: photos,
      });

      const savedUser = await this.userRepository.save(newUser);

      const signData = {
        userId: savedUser.id,
        username: savedUser.username,
      };
      return this.authService.signIn(signData);
    } catch (error) {
      console.error('Google registration error:', error);
      if (
        error instanceof ConflictException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException('Failed to register with Google: ');
    }
  }

  private generateUsername(name: string, email: string): string {
    const baseUsername = name
      ? name.toLowerCase().replace(/\s+/g, '_')
      : email.split('@')[0];

    const randomSuffix = Math.random().toString(36).substring(2, 8);
    return `${baseUsername}_${randomSuffix}`;
  }

  private async generateRandomPassword(): Promise<string> {
    const randomPassword =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return await bcrypt.hash(randomPassword, 10);
  }
}
