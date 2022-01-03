import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty() username: string;

  @IsNotEmpty() password: string;
}
