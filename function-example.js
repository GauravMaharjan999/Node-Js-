let person = {
    firstName: "Gaurav",
    lastName: "Maharjan",


    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getFullName());

const addition = (a, b) => {
    return a + b;

}

let result = addition(2, 3);
console.log(result)