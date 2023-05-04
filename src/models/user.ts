import {Cv} from "./cv";


export interface User {
    id: string;
    name: string;
    email: string;
    role: Role.ADMIN | Role.USER;
    cv : Cv[];
}
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}