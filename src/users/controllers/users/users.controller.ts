import { Controller, Get, Post, Body, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    async getUsers(){
        return this.userService.fetchUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto ){
        return this.userService.createUser(createUserDto);
    }

    //put is usually used to update entire data,
    //patch is usually used to update part of the data
    @Put("/:id")
    async updateUserById(
        @Param("id", ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
        ) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete("/:id")
    async deleteUserById(
        @Param("id", ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}
