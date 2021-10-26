import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDTO } from 'src/shared/DTO`s/login.DTO';
import { writeFile,readFile } from "fs/promises";

@Injectable()
export class LoginService {
  validUserName: string = 'admin'
  validPassword: string = '123456'

  
 async loginUser(userInfo: LoginDTO): Promise<boolean> {
    if (userInfo.password == this.validPassword && userInfo.username == this.validUserName) 
      return true
    else
      return false
  }
}
