import express, { Request, Response } from 'express';

const app = express();
let port = 3000;

let age: number = 30;   // variable modifiable
const name: string = "Alice";   // variable constante

age = 40;

let price: number = 19.99;
let greeting: string = `Hello, ${name}`;

let isStudent: boolean = true;
let hasGraduated: boolean = false;// utilisation des template strings

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];

let numbersArr: Array<number> = [1, 2, 3, 4];
let namesArr: Array<string> = ["Alice", "Bob", "Charlie"];

// tuple
let person: [string, number] = ["Alice", 25];

enum Color {
    Red,     // 0
    Green,   // 1
    Blue     // 2
}

let myColor: Color = Color.Green;
console.log(myColor);  // 1
console.log(Color[myColor]);  // Green

enum Status {
    Active = 1,
    Inactive = 0,
    Pending = -1
}

let userStatus: Status = Status.Active;
console.log(userStatus);  // 1

let randomValue: any = 10;
randomValue = "Hello";  // autorisé
randomValue = true;     // autorisé

function logMessage(message: string): void {
    console.log(message);
}

let u: undefined = undefined;
let n: null = null;

let person1: object = { name: "Alice", age: 25 };

// Type union
let id: number | string;
id = 123;    // valide
id = "ABC";  // valide

type UserId = number | string;
let userId: UserId;
userId = 123;     // valide
userId = "ABC";   // valide

let age2 = 30;  // TypeScript infère automatiquement que `age` est de type `number`.
// age2 = "30";    // Erreur, car `age` est supposé être un nombre.

let direction: "left" | "right" | "up" | "down";
direction = "left";  // valide
// direction = "center";  // Erreur, "center" n'est pas un type valide

let person2: { name: string; age: number } = {
    name: "Alice",
    age: 25
  };

let numbers3: number[] = [1, 2, 3, 4];

function multiply(a: number, b: number): number {
    return a * b;
}

function subtract(a: number, b: number) {
    return a - b;  // TypeScript infère que la valeur de retour est un number
}

let greet = (name: string) => {
    return `Hello, ${name}`;
};

function greet2(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}!`;
}

function greet3(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): string {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}
  
const alice = new Person("Alice", 25);
console.log(alice.greet()); // Hello, my name is Alice and I'm 25 years old.
  
console.log(greet3("Alice")); // Hello, Alice!
console.log(greet3("Bob", "Hi")); // Hi, Bob!

console.log(greet2("Alice")); // Hello, Alice!
console.log(greet2("Bob", "Hi")); // Hi, Bob!

abstract class Animal {
    abstract makeSound(): void;  // Méthode abstraite

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
makeSound(): void {
    console.log("Bark!");
}
}
  
const dog = new Dog();
dog.makeSound(); // Bark!
dog.move(); // Moving...


app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});