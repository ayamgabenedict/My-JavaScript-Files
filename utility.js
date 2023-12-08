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


//Using the SPREAD OPERATOR to evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2, arr3, arr4; 
(function(){
    arr2 = [...arr1];
    arr4 = arr1;
    arr1[0] = 'banana';
    arr3 = arr1;
})();
console.log(`arr3 is now ` + JSON.stringify(arr3));
console.log(`arr2 is ` + JSON.stringify(arr2));
console.log(`arr4 is ` + JSON.stringify(arr4));
console.log(`arr1 is now ` + JSON.stringify(arr1));


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


//Swapping the position of two inputs
let varA = 'AAAA';
let varB = 'BBBB';
(() => {
    [varA, varB] = [varB, varA];
    return varA && varB;
})();
console.log(`varA is now ${varA}`);
console.log(`varB is now ${varB}`);

//My own implementation
function swap(kwame, ama){
    [kwame, ama] = [ama, kwame]
    let swapped = [kwame, ama];
    return swapped; 
}