import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { ProjectsModule } from './projects/projects.module';
import { ManagersModule } from './managers/managers.module';
import { OwnersModule } from './owners/owners.module';
import { WorkersModule } from './workers/workers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'mycon_dev',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProjectsModule,
    ManagersModule,
    OwnersModule,
    WorkersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
