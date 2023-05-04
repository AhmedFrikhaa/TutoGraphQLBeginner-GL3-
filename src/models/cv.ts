import {Skill} from "./skill";
import {User} from "./user";

export interface Cv {
    id: string;
    name: string;
    age: number;
    job: string;
    skills: Skill[];
    user: User;
}