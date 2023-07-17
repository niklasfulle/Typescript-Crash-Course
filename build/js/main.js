"use strict";
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
let test = [];
test.push("a");
// Tuple
let tuple = ["a", 1, true];
let mixed = ["a", 1, true];
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
const person = {
    name: "John",
    alive: true
};
person.name = "Jane";
let test2 = {
    name: "John",
    alive: true,
    albums: [1, "test"]
};
const greet = (person) => {
    console.log("Hello", person.name.toLowerCase());
};
greet(test2);
// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
const test3 = {
    name: "John",
    alive: true,
    role: Role.ADMIN
};
