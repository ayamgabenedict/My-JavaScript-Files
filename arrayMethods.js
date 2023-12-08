// ARRAY methods
let arr = [1, 2, 3, 2, 1]
console.log(arr.indexOf(2));

console.log(arr.lastIndexOf(2));

console.log(arr.slice(2, 4)); //The start index is inclusive, the end index exclusive.

console.log(arr.slice(2)); //slice will take all of the elements after the start index when the end index is omitted.


const fruits = new Array('apples', 'oranges', 'pears', 10, true);
console.log(fruits);
console.log(fruits[2]);
fruits.push('banana');  //opp is "pop"
console.log(fruits);
fruits.unshift(15); //opp is "shift"
console.log(fruits);
let shiftedItem = fruits.shift(); 
console.log("shifted item: " + shiftedItem);
console.log(fruits.indexOf('apples')); //starts counting from 0
console.log(Array.isArray(fruits));
let poppedItem = fruits.shift(); //opp is "push"
console.log("popped item: " + poppedItem);


//Array Methods- MAP
let array1= [1, 2, 3, 4, 5, 6];

let array2= array1.map((element) => {
    return element * 2; 
})
console.log(array2);


//Array Methods- forEach
let array3= ['Abu', 'Karim', 'Abass', 'Allison', 'Wofa Kay'];
array3.forEach((element) => {
    console.log(element);
})


//Array Methods- FILTER
let array= [1, 3, 5, 6, 11, 10, 14, 67, 16];
let newArray = array.filter(element => {
    if(element > 13) return true;
    return false;
});
console.log(newArray);


//Array Methods- Reduce
array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
count= 0; //may be omitted
results= array.reduce((accumulator, currentValue) => {
    count++ //may be omitted
    return accumulator + currentValue;
}, 0);
console.log(results);


//Array Methods- Find
let students= [
    {name: 'Kofi', age: 16},
    {name: 'Ama', age: 15}
]
let student= students.find(s => 
  s["age"] ==15 //Or s.age == 15
)
console.log(student);


//concat and reduce Array methods
newArray = [[1, 2], [3, 4], [5, 6 ,7]]
let concatMethod = newArray[0].concat(newArray[1], newArray[2]);
console.log(concatMethod)

let newAns=concatMethod.reduce((a, b) => a * b);
console.log(newAns);


//High Order Array methods
const realNumbersArray= [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const getWholeNumbers = realNumbersArray.filter(arr => Number.isInteger(arr));
console.log(getWholeNumbers)
const getPositiveWholeNumbers = getWholeNumbers.filter( arr => arr > 0);
console.log(getPositiveWholeNumbers);
const positiveIntTimesTen = getPositiveWholeNumbers.map(arr => arr * 10);
console.log(positiveIntTimesTen); 

//Another, shorter option
let squareOfPositiveInt = realNumbersArray.filter(arr => Number.isInteger(arr) 
                    && arr > 0).map(arr => arr *arr);
console.log(squareOfPositiveInt);


//Another Example
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
        },
    {
        id: 2,
        text: 'Meeting with the boss',
        isCompleted: true
        },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
        }
];

// High order Array method- forEach, map, filter
//forEach
todos.forEach((todo)=>
    console.log(`Example of forEach: ${todo.text}`)
);

//Map--->> returns an array
let todoText = todos.map((todo) => `Example of map: ${todo.text}`);

console.log(todoText);

//Filter--->> returns an array
let todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;  
});
console.log(todoCompleted);

// Combining
 todoCompleted = todos
 .filter((todo) => todo.isCompleted === true)
 .map((todo)=> todo.text)

 console.log(todoCompleted);

