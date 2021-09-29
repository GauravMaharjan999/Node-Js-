// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;

// const callBackExample = (a, b, mathCallBack) => {
//     console.log(mathCallBack(a, b))
// }

// callBackExample(2, 2, add);

const makeStringUpperCase = (string) => {
  return string.toUpperCase();
};

const makeStringLowerCase = (string) =>{
    return string.toLowerCase();

}

const padStart = (string) =>{
    return string.padStart(20,"0")
}

const callBackFunction = (input, callBack) =>{

    let result = "Hello" +" "+ input;
    return callBack(result); 

}

console.log(callBackFunction("world",makeStringUpperCase));
console.log(callBackFunction("WORLD",makeStringLowerCase));
console.log(callBackFunction("WORLD",padStart));


