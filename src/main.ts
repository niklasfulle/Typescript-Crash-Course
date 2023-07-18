type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two;
let c = a as Three;

let d = <One>"world";
let e = <string | number>"world";


const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") {
    return a + b;
  } else {
    return "" + a + b
  }
}

let myVal: string = addOrConcat(1, 2, "concat") as string;

// be careful with this because it can lead to runtime errors
let nextVal: number = addOrConcat(1, 2, "concat") as number;

// The DOM

const img = document.querySelector("img")!  // "!" means that we know it will be there
const myImg = document.getElementById("#img") as HTMLImageElement;
const myImg1 = <HTMLImageElement>document.getElementById("#img");

img.src
myImg.src