import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './app/login/login.controller';
import { UserController } from './app/user/user.controller';
import { LoginService } from './shared/service/login.service';
import { UserService } from './shared/service/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    LoginController,
    UserController
  ],
  
  providers: [
    AppService,
    LoginService,
    UserService
  ],
})
export class AppModule {}
