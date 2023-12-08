//Conditionals
const x = 4;
if (x === 10){
    console.log('x is 10'); 
} else if (x > 10){
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10'); 
}

//Ternary operator
const w = 11;
const colour = w > 10 ? 'red' : 'blue';
console.log(`Ternary operator colour is ${colour}`);


//Using Switch Case
switch(colour){
    case 'red':
        console.log('Switch Case colour is red');
    break;
    case 'blue':
        console.log('Switch Case colour is blue');
    break;  
    default:
        console.log('Switch Case colour is neither red NOR blue');
    break;   
}