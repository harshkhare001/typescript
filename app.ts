const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const button = document.querySelector('button')!; 

type numOrString = number | string;
type Result = {val : number, timestamp : Date};

interface resultObj{
    val : number, 
    timestamp : Date
}

function add(num1: numOrString, num2:numOrString)
{
    if(typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else if(typeof num1 === "string" && typeof num2 === "string")
        return num1 + num2;
    return +num1 + +num2;
}

const numResults: Array<number> =[];
const textResult:string[] = [];

function printResult(resobj :resultObj)
{
    console.log(resobj.val, resobj.timestamp);
}
//console.log(add(1,6));

button.addEventListener('click',()=>{
    const result = add(+num1.value ,+num2.value);
    console.log(result);
    numResults.push(result as number);
    const Stringresult = add(num1.value,num2.value);
    console.log(Stringresult);
    textResult.push(Stringresult as string);
    printResult({val : result as number, timestamp : new Date()});
    console.log(textResult, numResults)
 })

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It Worked');
    },3000)
})

myPromise.then((result)=>{
    console.log(result.split('w'));
})

//console.log(add('1','6'));
