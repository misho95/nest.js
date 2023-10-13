import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInInputValidator } from './auth.signin.inputs';
import { AuthSignUpInputValidator } from './auth.signup.input';
import { AuthUserType } from './auth.interface';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get('/users')
  getUsers(): AuthUserType[] {
    return this.appService.getUsers();
  }

  @Post('/signin')
  signIn(@Body() user: AuthSignInInputValidator) {
    return this.appService.signIn(user);
  }
  @Post('/signup')
  signUp(@Body() user: AuthSignUpInputValidator) {
    return this.appService.signUp({ id: new Date().getTime(), ...user });
  }
}
