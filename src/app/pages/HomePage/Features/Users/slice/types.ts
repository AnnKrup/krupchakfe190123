export interface UsersState {
  users: Array<User>;
  loading: boolean;
  error: any;
}

export type User = {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
};
