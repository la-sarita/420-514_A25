import { IUser } from "../interfaces/user.interface";

export let users: IUser[] = [
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', username: 'jane.doe', password: '', role: 'admin' },
    { id: 2, name: 'Pole Prade', email: 'pole.prade@example.com', username: 'jane.doe', password: '', role: 'user' },
    { id: 3, name: "Alice Maron", email: "alice.maron@example.com", username: "alice", password: "hashed-password", role: "admin" },
    { id: 4, name: "Bob Luran", email: "bob.luran@example.com", username: "bob", password: "hashed-password", role: "user" }
];