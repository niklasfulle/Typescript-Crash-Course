"use strict";
// Literal Types
let myName;
let userName;
userName = "Gustav";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello World");
let subtract = function (a, b) {
    return a - b;
};
//interface mathFunction { (a: number, b: number): number }
let multiply = function (a, b) {
    return a * b;
};
const addAll = (a, b, c) => {
    if (typeof c === "number") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return createError("Expected string or number");
};
