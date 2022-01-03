import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/Login.dto';

@Injectable()
export class AuthService {
  public async login(loginDto: LoginDto): Promise<any> {
    return loginDto;
  }
}
