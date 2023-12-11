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



 //--------------HIGH ORDER ARRAY METHODS----------------------
const companies= [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},    
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages= [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach
companies.forEach((company) => {
    console.log(company);
});

//filter
const canDrink= ages.filter(age => age>= 21);
console.log(canDrink);

let retailCompanies= companies.filter(company => company.category==='Retail');
console.log(retailCompanies);

retailCompanies= companies.filter(company => company.category==='Retail')
.map(company => {
    return `${company.name}, Start year:${company.start}, End Year:${company.end}`
});
console.log(retailCompanies);

//Get companies that lasted 10years or more
const tenYearsCompanies= companies.filter(company=> (company.end - 
company['start']) >= 10);
console.log(tenYearsCompanies);

//map
const testMap= companies.map(company=>`${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);

let ageSquareRoot= ages.map(age => Math.sqrt(age));
console.log(ageSquareRoot);

//Square Ages and Multiply by two
agesSquaredTimesTwo= ages
    .map(age => age * age)
    .map(age => age * 2);
console.log(agesSquaredTimesTwo);


//sort
//Sort companies by start year
let sortedCompanies= companies.sort((a, b) => (a.start > b.start ? 1: -1));
console.log(sortedCompanies);

//Another implementation of the "company sort by start year" above
sortedCompanies= companies.sort((a, b) => (a.start - b.start));
console.log(sortedCompanies);

//Sort ages in ascending order
const sortAgesAsc= ages.sort((a, b) => a - b);
console.log(sortAgesAsc);

//Sort ages in descending order
const sortAgesDsc= ages.sort((a, b) => b - a);
console.log(sortAgesDsc);

//Another Implemetation Sort ages in descending order
sortAgesDsc= ages.sort((b, a) => a - b);
console.log(sortAgesDsc);

//reduce
//Summing the elements in ages
const ageSum= ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//Get Total years for all companies
const companiesTotalYears= companies.reduce((total, company) => 
total + (company.end - company.start), 0);

//Combined Methods
const combined= ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b )
.reduce((a, b) => a + b, 0)

console.log(combined);