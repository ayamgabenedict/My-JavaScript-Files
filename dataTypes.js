// Data Types
const string  = 'Akua is coming to london';
const age = 20; 
const float = 2.5;
const bool = false;
const isNull = null;
const y = undefined;
let z;
let arr = [2,3]

console.log(`The type of y is ${typeof y} because it was assigned 'undefined'`);
console.log(`The type of z is ${typeof z} because it was declared but not initialized`);
console.log(`The type of float is ${typeof float} because JS doesn\'t distinguish between number & float`);
console.log(`The type of bool is ${typeof bool}`);
console.log(`The type of string is ${typeof string}`);
console.log(`The type of isNull is ${typeof isNull} because it was assigned the value \'null\'`);
console.log(`The type of arr is ${typeof arr}`);