import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
//responsible for business logic

    constructor(@InjectRepository(User) private userRepo: Repository<User>){}
    fetchUsers(){
        return this.userRepo.find();
    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepo.create({ 
            ...userDetails, 
            createdAt: new Date(), 
        });
        console.log("1before save");
        return this.userRepo.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams){
        return this.userRepo.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number){
        return this.userRepo.delete({ id });
    }
}
