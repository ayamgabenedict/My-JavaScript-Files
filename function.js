//Functions  Types

//Defining a function 
const square = function(x) {
    return x * x;
};
console.log(square(12));

let power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));


//Declaration notation Example
console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}

// Arrow Notation
power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(`The 8th power of 2: ${power(2, 8)}`);


//
const summ = (function(){
    return function summ(...args){
        return args.reduce((a, b) => a + b, 0)
    }
})();
console.log(summ());
console.log(summ(10));
console.log(summ(10, 20));
console.log(summ(10, 20, 30, 40, 50));


// Constructor Function
function Personn(firstName,lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }  
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    this.getBirthDay = function (){
        return this.dob.getDay();
    }
}
//Prototype---better way of doing the Constructor function above
Personn.prototype.getBirthDay = function(){
    return this.dob.getDay();
}
//Instantiate Constructor Object
const personn1 = new Personn('Kwadwo', 'Nkansah', '04-08-2000'); 
console.log(personn1);
console.log(personn1.getFullName());
console.log(personn1.dob.getDay());
console.log(personn1.getBirthDay());
console.log(personn1.dob.getFullYear());
console.log(personn1.getBirthYear())