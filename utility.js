//REST OPERATOR
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));


//Three-dot notation to call a function
let numbers = [5, 1, 7];
console.log(max(...numbers));

//Further illustrations on the REST Operator
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);


//Example of RETURN KEYWORD
function myLoop(){
    for(let i= 0; i< 10; i++){
    
    console.log(`Example of "Return @ i==5": ${i}`); 
    if(i==5){
        return; //this takes you out of the entire function
    }
    }
}
myLoop()
//Example of BREAK KEYWORD
for(let i= 0; i< 10; i++){
    console.log(`Example of "Break @ i==5": ${i}`);
    if(i==5){
        break;
    }
}
//Example of CONTINUE KEYWORD
for(let i= 0; i< 10; i++){
    if(i==5){
        continue;
    }
    console.log(`Example of "Continue @ i==5": ${i}`);
}

//Generate Random numbers
function randomNumber(){
    return Math.random();
}
console.log(randomNumber())

//Generate Random Whole Number < 20
function randomWholeNumber(){
    return Math.floor(Math.random() * 20);
}
console.log(randomWholeNumber())

//Generate Random Number between a range
function randomNumberBetweenRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
let randomRange = randomNumberBetweenRange(5, 8);
console.log(randomRange)

//Convert string to integer
function convertToInt(str){
    return parseInt(str, 2);
}
console.log(convertToInt('1001'))


//Ternary Operator (Nested)
function positiveOrNegative(input){
    return input > 0 ? `${input} is a positive number`: input < 0 ? `${input} is a negative number`: `${input} is zero`;
}
console.log(positiveOrNegative(0))


//Check scope
function checkScope(){
    "use strict"
    let s = 'function scope';
    if (true) {
        let s = 'block scope';
        console.log(`s is a ${s} inside an "if block"`);
    }
    console.log(`s is a ${s} inside a "function"`)
}
checkScope()