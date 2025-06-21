import {
    Controller,
    Post,
    Body,
    HttpStatus,
    HttpCode,
    BadRequestException,
    Get
} from '@nestjs/common';
import { GoogleSignUpService } from './google-sign-up.service';
import { SkipThrottle } from '@nestjs/throttler'

export class GoogleRegisterDto {
    idToken: string;
}

@SkipThrottle()
@Controller('google-sign-up')
export class GoogleSignUpController {
    constructor(private readonly googleSignUpService: GoogleSignUpService) { }

    @Post()
    // @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: GoogleRegisterDto) {
        const { idToken } = body;

        if (!idToken) {
            throw new BadRequestException('Google ID token is required');
        }

        const user = await this.googleSignUpService.registerWithGoogle(idToken);

        return {
            success: true,
            message: 'User registered successfully',
            user,
        };
    }

    @Get('test')
    findAll() {
        return "kab dav";
    }

    @Get()
    getRoot() {
        return "Google sign-up module is working!";
    }
}
