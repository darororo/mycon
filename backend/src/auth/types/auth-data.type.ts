export type AuthResult = {
  email: string;
  userId: number;
  username: string;
  accessToken: string;
  refreshToken: string;
};
export type AuthInput = {
  email: string;
  password: string;
};

export type SignInData = {
  userId: number;
  username: string;
  email: string;
};
