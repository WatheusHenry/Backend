import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { AnimalsModule } from './modules/animals.module';
import { PublicationModule } from './modules/publication.module';
import { MinioService } from './services/minio.service';
import { User } from './entities/user.entity';
import { Publication } from './entities/publication.entity';
import { AuthModule } from './modules/auth.module';
import { AuthController } from './controllers/auth.controller';
import { LikeModule } from './modules/like.module';
import { Like } from './entities/like.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'b53c535d4ad2ee953638faf55be7072d469143dc1f570242ae8737cf5a262b3b', // Coloque uma chave segura aqui
      signOptions: { expiresIn: '1h' }, // Tempo de expiração do token
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_CONNECTION,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Publication,Like],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UserModule,
    AnimalsModule,
    PublicationModule,
    AuthModule,
    LikeModule],

  controllers: [AppController, AuthController],
  providers: [AppService, MinioService],
  exports: [MinioService]
})
export class AppModule { }
