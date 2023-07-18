"use strict";
// convert to more or less specific
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
let myVal = addOrConcat(1, 2, "concat");
// be careful with this because it can lead to runtime errors
let nextVal = addOrConcat(1, 2, "concat");
// The DOM
const img = document.querySelector("img"); // "!" means that we know it will be there
const myImg = document.getElementById("#img");
const myImg1 = document.getElementById("#img");
img.src;
myImg.src;
