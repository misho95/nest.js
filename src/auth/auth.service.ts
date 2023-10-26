import { Injectable } from '@nestjs/common';
import { AuthSingInType, AuthUserType } from './auth.interface';

@Injectable()
export class AuthService {
  private users: AuthUserType[] = [
    { id: 1, username: 'misho95', email: 'misho@mail.ru', password: '123456' },
  ];

  signIn(user: AuthSingInType) {
    const AuthUser = this.users.find((u) => {
      if (u.email === user.email && u.password === user.password) {
        return u;
      }
    });
    if (!AuthUser) {
      return {
        message: 'Invaild Credentials!',
        error: 'Bad Request',
        statusCode: 400,
      };
    }
    return AuthUser;
  }

  signUp(user: AuthUserType) {
    const checkEmail = this.users.find((u) => {
      if (u.email === user.email) {
        return u;
      }
    });
    if (checkEmail) {
      return {
        message: 'Email is Already In Use!',
        error: 'Bad Request',
        statusCode: 400,
      };
    }
    this.users.push(user);
    return 'SignedUp Successfully!';
  }
}
