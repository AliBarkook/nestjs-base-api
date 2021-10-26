import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from 'src/shared/DTO`s/login.DTO';
import { Response } from 'express';
import { UserService } from 'src/shared/service/user.service';
import { UserDTO } from 'src/shared/DTO`s/user.DTO';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    
    constructor(
        private readonly userService: UserService
        ) {}

    // @Post()
    // create(@Body() createUserDto: UserDTO) {
    //     return this.userService.create(createUserDto);
    // }
    
    @Get('getAll')
    @ApiOperation({ summary: 'get all user'})
    @ApiResponse({ status: 404, description: 'no users found!' })
    @ApiResponse({ status: 200, description: 'get all user' })
    findAll(@Res({ passthrough: true }) res: Response, @Body() body: UserDTO[]) {
        // if (this.userService.getAllUser()) {
        res.status(HttpStatus.OK);
        return this.userService.getAllUser();
        // }
        // else
        //     throw new HttpException('no users found!', HttpStatus.NOT_FOUND)
    }
    
    // @Get('getById/:id')
    // findOne(@Param('id') id: string) {
    //     return this.userService.findOne(+id);
    // }
    
    // @Put('edit/:id')
    // update(@Param('id') id: string, @Body() updateUserDto: UserDTO) {
    //     return this.userService.update(+id, updateUserDto);
    // }
    
    // @Delete('delete:id')
    // remove(@Param('id') id: string) {
    //     return this.userService.remove(+id);
    // }
}
