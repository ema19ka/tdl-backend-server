import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dtos/Login.dto';

@Controller('auth')
export class AuthController {
  @Post('/login')
  protected async login(
    @Body(ValidationPipe) loginDto: LoginDto,
  ): Promise<any> {
    return 'login';
  }
}
