import { Person } from "./person.js";
let firstPerson = new Person("Bobia");
let newWelcome = firstPerson.welcome();
let h1 = document.querySelector("h1");
h1.textContent = newWelcome;
