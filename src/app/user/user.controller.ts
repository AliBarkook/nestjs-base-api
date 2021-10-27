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
    async findAll(@Res({ passthrough: true }) res: Response) {
        
        if (await (await this.userService.getAllUser()).length > 0) {
            res.status(HttpStatus.OK);
            return this.userService.getAllUser();
        }
        else
            throw new HttpException('no user found!', HttpStatus.NOT_FOUND)
    }
    
    @ApiOperation({ summary: 'get user by id'})
    @ApiResponse({ status: 404, description: 'no users found with this id' })
    @Get('getById/:id')
    async findOne(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
        
        if (await this.userService.getUserById(id)) {
            res.status(HttpStatus.OK);
            return this.userService.getUserById(id)
        }
        else
            throw new HttpException('no users found with this id', HttpStatus.NOT_FOUND)
    }
    
    // @Put('edit/:id')
    // update(@Param('id') id: string, @Body() updateUserDto: UserDTO) {
    //     return this.userService.update(+id, updateUserDto);
    // }
    
    @ApiOperation({ summary: 'delete user by id'})
    @ApiResponse({ status: 404, description: 'no users found with this id' })
    @Delete('delete/:id')
    async remove(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
        const result = await this.userService.removeUserById(id)
          
        if  (result) {
            res.status(HttpStatus.OK).json(result);
        }
        else if (result === '') {
            throw new HttpException('no user found with this id', HttpStatus.NOT_FOUND)
        }
    }
}
