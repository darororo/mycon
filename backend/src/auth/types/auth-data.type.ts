export type AuthResult = {
  accessToken: string;
  userId: number;
  username: string;
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
