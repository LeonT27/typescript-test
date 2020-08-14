class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    welcome() {
        return "Welcome " + this.name;
    }
}

let firstPerson = new Person("Bobia");
let newWelcome: string = firstPerson.welcome();

let h1 = document.querySelector("h1");
h1!.textContent = newWelcome;