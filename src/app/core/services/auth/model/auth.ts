export interface IAuth {
    id: number | string;
    email: string;
    password: string;
    role: Role;
}

export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER'
}