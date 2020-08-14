"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    welcome() {
        return "Welcome " + this.name;
    }
}
let firstPerson = new Person("Bobia");
let newWelcome = firstPerson.welcome();
let h1 = document.querySelector("h1");
h1.textContent = newWelcome;
