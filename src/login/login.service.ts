import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDTO } from 'src/shared/DTO`s/login.DTO';

@Injectable()
export class LoginService {
  validUserName: string = 'admin'
  validPassword: string = '123456'


  
  loginUser(userInfo: LoginDTO): boolean {
    if (userInfo.password == this.validPassword && userInfo.username == this.validUserName) 
      return true
    else
      return false
  }
}
