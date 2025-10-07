import { role } from "../types/role";

export interface IUserPayload {
    id: number;
    email: string;
    role: role;
}

export interface IUserBase {
    name: string;
    username: string;
    email: string;
    role: role;
}

export interface IUserResponse extends IUserBase {
    id: number;
}

export interface IUser extends IUserResponse {
    password: string;
}

export interface IUserLogin {
    name: string;
    username: string;
}
