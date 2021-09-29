// function exampleFunction(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// const example = () => "hello world";


// console.log(example());

// const getFullName = (firstName, lastName) => firstName.toUpperCase() + " " + lastName.toUpperCase();

// console.log(exampleFunction("John", "Doe"));
// console.log(getFullName("John", "Doe"));

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 24,
//   address: "Kathmandu",
//   getObject: function() {
//       return this;
//   },
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   getAge: function () {
//     return this.age;
//   },
// };
// // console.log("Person Full name is: ", person.getFullName());
// // console.log("Person Age is: ", person.getAge());
// console.log("Current object is: ", person.getObject());

// console.log("Full name is ",person.getFullName());






let phone = {
    name: "realme 7",
    modelNumber: "123456",
    ram : "8GB",


    getName: function(){
        return this.name;
    },
    getModerNumber : function(){
        return this.modelNumber;
    }
}

console.log(phone.getName());
console.log(phone.getModerNumber());