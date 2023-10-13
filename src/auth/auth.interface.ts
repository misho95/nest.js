export interface AuthUserType {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface AuthSingInType {
  email: string;
  password: string;
}
