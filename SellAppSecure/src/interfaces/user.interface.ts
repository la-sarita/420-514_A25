export interface IUserBase {
    name: string;
    username: string;
    email: string;
    role: string;
}

export interface IUserResponse extends IUserBase{
    id: number;
}
  
export interface IUser extends IUserResponse {
    password: string;
}

export interface IUserLogin{
    name: string;
    username: string;
}
