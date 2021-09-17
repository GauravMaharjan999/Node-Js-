// let a = 1;
// let b = "Hello world";
// let c = true;


// let iims;

// console.log(iims);

// let person = {
//     name: "Gaurav Maharjan",
//     age: 21,
//     address: "Kathmandu",
//     phone: "9800000000",
//     birthDate: new Date(),
//     location: {
//         lat: 27.21312312,
//         lng: 87.23443244
//     }
// }



// console.log("This person name is", person.name);
// console.log("This person name birthdate is", person.birthDate);
// console.log("This person location is", person.location.lng);


// let exampleArray = Array(1, 2, 3, 4, 5, 6, 7);

// console.log(exampleArray);


// let first_letter = "Hello";
// let second_letter = "World";

// console.log(first_letter + second_letter);

// console.log("The length of second letter is ", second_letter.length)

// let example = "kathmandu";
//             012345678
//             987654321 (negative index)

// console.log(example.slice(-9, -2));
// console.log(example);

// let example1 = "        Hello   World     "
// example1 = example1.trim();
// console.log(example1);
// console.log(example1.length);

// let str = "You are a dog, I am not a dog";
// console.log(str.replace("dog", "cat"));




// let example5 = 123456;
// console.log("First: ", typeof example5);
// console.log(example5);
// example5 = example5.toString();
// console.log("Last: ", typeof example5);

// console.log(example5);

// let padStartExample = "Hello";
// console.log(padStartExample.padStart(15, "abcd"));

// let padEndExample = "World";
// console.log(padEndExample.padEnd(9, "abcd"));

// let fruits = ["apple", "banana", "pears", "mango", "graps"];

// fruits.splice(1, 1);

// console.log(fruits);

let country_list = ["Afghanistan", "Albania", "Algeria", "Andorra"];
country_list.forEach(function(element, index, str) {
    console.log(element, index, str);
})

let strs = ["aa", 2, 3]

let anotherString = strs.map(function(element, index) {
    return element + 2;
})



console.log(anotherString);
