export type AuthResult = {
  accessToken: string;
  userId: number;
  username: string;
  user: object;
};
export type AuthInput = {
  username: string;
  password: string;
  userId: number;
};

export type SignInData = {
  userId: number;
  username: string;
};
