// // // let a = 1;
// // // let b = "Hello world";
// // // let c = true;


// // // let iims;

// // // console.log(iims);

// // // let person = {
// // //     name: "Gaurav Maharjan",
// // //     age: 21,
// // //     address: "Kathmandu",
// // //     phone: "9800000000",
// // //     birthDate: new Date(),
// // //     location: {
// // //         lat: 27.21312312,
// // //         lng: 87.23443244
// // //     }
// // // }



// // // console.log("This person name is", person.name);
// // // console.log("This person name birthdate is", person.birthDate);
// // // console.log("This person location is", person.location.lng);


// // // let exampleArray = Array(1, 2, 3, 4, 5, 6, 7);

// // // console.log(exampleArray);


// // // let first_letter = "Hello";
// // // let second_letter = "World";

// // // console.log(first_letter + second_letter);

// // // console.log("The length of second letter is ", second_letter.length)

// // // let example = "kathmandu";
// // //             012345678
// // //             987654321 (negative index)

// // // console.log(example.slice(-9, -2));
// // // console.log(example);

// // // let example1 = "        Hello   World     "
// // // example1 = example1.trim();
// // // console.log(example1);
// // // console.log(example1.length);

// // // let str = "You are a dog, I am not a dog";
// // // console.log(str.replace("dog", "cat"));




// // // let example5 = 123456;
// // // console.log("First: ", typeof example5);
// // // console.log(example5);
// // // example5 = example5.toString();
// // // console.log("Last: ", typeof example5);

// // // console.log(example5);

// // // let padStartExample = "Hello";
// // // console.log(padStartExample.padStart(15, "abcd"));

// // // let padEndExample = "World";
// // // console.log(padEndExample.padEnd(9, "abcd"));

// // // let fruits = ["apple", "banana", "pears", "mango", "graps"];

// // // fruits.splice(1, 1);

// // // console.log(fruits);

// // let country_list = ["Afghanistan", "Albania", "Algeria", "Andorra"];
// // country_list.forEach(function(element, index, str) {
// //     console.log(element, index, str);
// // })

// // let strs = ["aa", 2, 3]

// // let anotherString = strs.map(function(element, index) {
// //     return element + 2;
// // })



// // console.log(anotherString);



// // Object
// // Array
// // Number
// // string
// // boolean
// // Float
// // DateTime
// // null
// // undefined

// let a = 1; // Number
// let b = "Hello World"; //string
// let c = true; //boolean
// let d = 1.5; //Float

// console.log(a);

// a = "IIMS";

// console.log(a);

// const example = "Hello World";
// console.log(example);


// let iims = null;
// console.log(iims);

// let person = {
//     name: 'Yajindra',
//     age: 21,
//     address: "Kathmandu",
//     phone: 9876543210,
//     location: {
//         lat: 27.7172453,
//         lng: 85.3239605
//     },
//     phone: ['1234567890','1231233434']
// };
// console.log("This person name is: ", person.name);
// console.log("His address is: ", person.address);
// // console.log("His Birth date is: ", person.birthDate);
// console.log("His location Latitude is: ", person.location.lat);
// console.log("His location Longitude is: ", person.location.lng);

// let exampleArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let exampleArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//                 //0,1,2,3,4,5,6,7,8,9,10

// console.log(exampleArray);
// console.log(exampleArray2);


// let studentNames = ["Yajindra", "Gaurav","Ram","Shyam"];
// console.log(studentNames[5])

// // variable
// // data types
// // object
// // array


// // Join two strings and get its length
// let firstLetter = "Hello";
// let secondLetter = "World";
// let thirdLetter = firstLetter + secondLetter;
// console.log("Length of third Letter is: ",thirdLetter.length);

// // slice start index, end index
// let exampleSlice = "Hello world IIMS";
// console.log(exampleSlice.slice(-5,-1));

// // concat two word
// let firstWord = "Hello ";
// let lastWord = "World";
// let replaceWord = "IIMS";
//  let concatWord = firstWord.concat(lastWord);

//  // replace word in string
//  console.log(concatWord.replace("World", replaceWord));

//  // change to lower case
// let example2 = "HELLO WORLD";
// console.log("to lower case:", example2.toLowerCase());

// // change to upper case
// let example3 = "hello world";
// console.log("to upper case: ", example3.toUpperCase())

// // trim a string and get length
// let example4 = "   Hello World   ";
// console.log("Length of example4: ",example4.length);
// example4 = example4.trim();
// console.log("Trimmed value: ", example4);
// console.log("Length of example4: ",example4.length);

// // get type
// let example5 = 123456;
// console.log("First: ",typeof example5);
// example5 = example5.toString();
// console.log("Last: ", typeof example5);

// // get substr
// let str = "Hello world!";
// let result = str.substr(0); 
// console.log(result); 

// // get index of
// let checkIndexOf = "Hello world!";
// console.log(checkIndexOf.indexOf("world"));

// // includes of
// let checkIncludes = "Hello world!";
// console.log("check if checkIncludes includes world", checkIncludes.includes("world"));
// console.log("check if checkIncludes includes iims", checkIncludes.includes("iims"));

// // check char at
// let checkCharAt = "I am from Kathmandu";
// console.log(checkCharAt.length);
// console.log("checkCharAt: ", checkCharAt.charAt(2));

// // let newWord = "hello world world";
// // console.log(newWord.replaceAll("world","iims"));


// // pad a string example
// let padStartExample = "Hello";
// console.log(padStartExample.padStart(12,"IIMS"));
// let padEndExample = "World";
// console.log(padEndExample.padEnd(9,"IIMS"));


let first = "Hello";
let last = "World";
let full = "123456";

console.log(typeof(full));
