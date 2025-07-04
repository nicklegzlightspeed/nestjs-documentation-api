import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log('Creating user:', createUserDto);
    return {
      id: 1,
      ...createUserDto,
    };
  }

  findOne(id: number) {
    console.log(`Finding user with id: ${id}`);
    return `This action returns a #${id} user`;
  }
}
