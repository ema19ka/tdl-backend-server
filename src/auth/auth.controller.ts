import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  protected async login(
    @Body(ValidationPipe) loginDto: LoginDto,
  ): Promise<any> {
    // return 'login';
    return this.authService.login(loginDto);
  }
}
