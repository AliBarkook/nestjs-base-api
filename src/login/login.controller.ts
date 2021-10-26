import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDTO } from 'src/shared/login.DTO';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}


    @Post()
    create(@Body() loginDTO: LoginDTO) {
        return this.loginService.loginUser(loginDTO);
    }
}
