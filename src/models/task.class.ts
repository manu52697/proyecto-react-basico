import { LEVELS } from "./levels.enum";


export class Task {

    name: string = '';
    description: string = '';
    completed: boolean = false;
    level: LEVELS = LEVELS.NORMAL;

    constructor(name: string, description: string, completed: boolean, level: LEVELS) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }

}