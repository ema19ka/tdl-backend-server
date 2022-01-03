import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dtos/RegisterUser.dto';
import { User } from './entity/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async registerUser(user: User): Promise<User> {
    // console.log(user.username);
    // const userInDb = await this.userRepository.findOne({
    //   where: user.username,
    // });
    // if (userInDb) {
    //   throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    // }
    return await this.userRepository.save(user);
    // return 'Register';
  }
}
