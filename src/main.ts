// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];


type Person = {
  name: string,
  alive: boolean
  albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// Literal Types

let myName: "Niklas";

let userName: "Niklas" | "Hans" | "Gustav";
userName = "Gustav";

// functions

const add = (a: number, b: number): number => {
  return a + b;
}

const logMsg = (msg: any): void => {
  console.log(msg);
}

logMsg("Hello World");

let subtract = function (a: number, b: number): number {
  return a - b;
}

type mathFunction = (a: number, b: number) => number;
//interface mathFunction { (a: number, b: number): number }

let multiply: mathFunction = function (a, b) {
  return a * b;
}

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c === "number") {
    return a + b + c;
  }
  return a + b;
}

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
}

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));

logMsg(sumAll(1, 3));

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4, 5));

// never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") {
    return "string"
  }
  if (isNumber(value)) {
    return "number"
  }
  return createError("Expected string or number");
}