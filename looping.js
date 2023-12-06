// For loop
let ourArray = [];
for (let i = 10; i > 0; i -= 2){
    ourArray.push(i);
}
console.log(ourArray);

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

// Do while
let i = 2; 
let Arry =[];
do {
    Arry.push(i);
    i+=2;
}while (i <= 10)
console.log(Arry);