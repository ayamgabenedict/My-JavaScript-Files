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