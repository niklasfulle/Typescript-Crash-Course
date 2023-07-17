let stringArr = ['a', 'b', 'c'];
let numberArr = ["1", 2, 3];
let anyArr = [1, "a", true];

stringArr[0] = "A";
stringArr.push("d");

numberArr[0] = 0;
numberArr.push("4");

anyArr[0] = false;
anyArr.push(2);
anyArr.unshift("b");

let test: string[] = [];
test.push("a");

// Tuple

let tuple: [string, number, boolean] = ["a", 1, true];
let mixed = ["a", 1, true];


// objects

let myObj: object;
myObj = [];
console.log(typeof myObj);

const person = {
  name: "John",
  alive: true
}

person.name = "Jane";

interface Person {
  name: string,
  alive: boolean
  albums: (string | number)[]
}

let test2: Person = {
  name: "John",
  alive: true,
  albums: [1, "test"]
}

const greet = (person: Person) => {
  console.log("Hello", person.name.toLowerCase());
}

greet(test2);

// Enums

enum Role { ADMIN, USER, READ_ONLY };

const test3 = {
  name: "John",
  alive: true,
  role: Role.ADMIN

}