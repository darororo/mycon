import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ManagersModule } from './managers/managers.module';
import { OwnersModule } from './owners/owners.module';
import { WorkersModule } from './workers/workers.module';
import { NestMinioModule } from 'nestjs-minio';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpLoggerMiddleware } from './common/middlewares/http-logger.middleware';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UploadModule } from './upload/upload.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { InventoryModule } from './inventory/inventory.module';
import { SeedModule } from './seed/seed.module';
import { PayrollModule } from './payroll/payroll.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_NAME'),
          autoLoadEntities: true,
          synchronize: config.get<boolean>('DB_SYNCHRONIZE'),
          // dropSchema: true,
        };
      },
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    NestMinioModule.register({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_ACCESS_KEY,
    }),

    ThrottlerModule.forRootAsync({
      useFactory: (configService: ConfigService) => [
        {
          ttl: configService.getOrThrow<number>('UPLOAD_RATE_TTL'),
          limit: configService.getOrThrow<number>('UPLOAD_RATE_LIMIT'),
        },
      ],
      inject: [ConfigService],
    }),
    UsersModule,
    ProjectsModule,
    ManagersModule,
    OwnersModule,
    WorkersModule,
    AuthModule,
    UploadModule,
    CommentsModule,
    PostsModule,
    InventoryModule,
    SeedModule,
    PayrollModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
