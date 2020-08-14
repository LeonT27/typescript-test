import { IPerson } from "./iperson.js"

export class Person implements IPerson {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    welcome() {
        return "Welcome " + this.name;
    }
}