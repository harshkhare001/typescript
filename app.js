"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const button = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else if (typeof num1 === "string" && typeof num2 === "string")
        return num1 + num2;
    return +num1 + +num2;
}
const numResults = [];
const textResult = [];
function printResult(resobj) {
    console.log(resobj.val, resobj.timestamp);
}
//console.log(add(1,6));
button.addEventListener('click', () => {
    const result = add(+num1.value, +num2.value);
    console.log(result);
    numResults.push(result);
    const Stringresult = add(num1.value, num2.value);
    console.log(Stringresult);
    textResult.push(Stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(textResult, numResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked');
    }, 3000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
//console.log(add('1','6'));
