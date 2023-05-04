import {Role, User} from "./models/user";
import {Skill} from "./models/skill";
import {Cv} from "./models/cv";

const user1 : User = {
    id: "1",
    name: 'John',
    email: 'john@gmail.com',
    role: Role.ADMIN,
    cv:[cv1]
}
const user2 : User = {
    id: "2",
    name: 'Jane',
    email: 'Jane@gmail.com',
    role: Role.USER,
    cv:[cv2]
}
const user3 : User = {
    id: "3",
    name: 'Jack',
    email: 'Jack@gmail.com',
    role: Role.USER,
    cv:[cv3]

}
const skill1: Skill = {
    id: 1,
    designation: 'Angular',
    cvs: [cv1]
}
const skill2: Skill = {
    id: 2,
    designation: 'React',
    cvs: [cv1]
}
const skill3: Skill = {
    id: 3,
    designation: 'Vue',
    cvs: [cv2]
}
const skill4: Skill = {
    id: 4,
    designation: 'Node',
    cvs: [cv2]
}
const skill5: Skill = {
    id: 5,
    designation: 'Java',
    cvs: [cv3]
}
const cv1: Cv = {
    id: "1",
    name: 'cv1',
    age: 20,
    job: 'job1',
    skills: [skill1, skill2],
    user: user1
}
const cv2: Cv = {
    id: "2",
    name: 'cv2',
    age: 30,
    job: 'job2',
    skills: [skill3, skill4],
    user: user2

}
const cv3: Cv = {
    id: "3",
    name: 'cv3',
    age: 40,
    job: 'job3',
    skills: [skill5],
    user: user3
}
class Context {
    users: User[] = [user1, user2, user3];
    skills: Skill[] = [skill1, skill2, skill3, skill4, skill5];
    cvs: Cv[] = [cv1, cv2, cv3];
}
let context = new Context();
export default context;