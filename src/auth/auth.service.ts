import { Injectable } from '@nestjs/common';
import { AuthSingInType, AuthUserType } from './auth.interface';

@Injectable()
export class AuthService {
  private users: AuthUserType[] = [
    { id: 1, username: 'misho95', email: 'misho@mail.ru', password: '123456' },
  ];

  getUsers(): AuthUserType[] {
    return this.users;
  }

  signIn(user: AuthSingInType) {
    const AuthUser = this.users.find((u) => {
      if (u.email === user.email && u.password === user.password) {
        return u;
      }
    });
    return AuthUser;
  }
  signUp(user: AuthUserType) {
    this.users.push(user);
  }
}
