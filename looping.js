// For loop
let ourArray = [];
for (let i = 10; i > 0; i -= 2){
    ourArray.push(i);
}
console.log(ourArray);


// Do while loop
let i = 2; 
let Arry =[];
do {
    Arry.push(i);
    i+=2;
}while (i <= 10)
console.log(Arry);


//While loop
while (i <= 10 && i > 0){
    Arry.push(i);
    i-=2;
}


//Nested for loop
function multiplyAll(arr){
    let product = 1;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
let ans = multiplyAll([[1, 2], [3, 4], [5, 6 ,7]]);
console.log(ans);


//Looping through an array
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

for (let todo of todos) {
    console.log(`Better way of looping through an Array: ${todo.text}`);
}