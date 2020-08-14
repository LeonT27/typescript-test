import { Person } from "./person";

let firstPerson = new Person("Bobia");
let newWelcome: string = firstPerson.welcome();

let h1 = document.querySelector("h1");
h1!.textContent = newWelcome;