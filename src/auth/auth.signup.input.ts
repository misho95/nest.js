import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthSignUpInputValidator {
  @IsNotEmpty()
  password: string;
  username: string;
  @IsEmail()
  email: string;
}
