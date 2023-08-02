import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { Cat } from './cats/cat.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Owner } from './owners/owner.entity';

@Module({
  // controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Cat, Owner],
      logging: true
    }),
    CatsModule,
    OwnersModule,
    AuthModule,
    UsersModule
  ]
})
export class AppModule {}