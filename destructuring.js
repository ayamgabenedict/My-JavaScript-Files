//Destructuring
let voxel = {
    x : 3.7,
    y : 40,
    z : 45.6
}
const {x:a, y:b, z:c} = voxel;
console.log(`a = ${a}, \nb = ${b},  \nc = ${c}`)

const AVG_TEMP = {
    today:67.8,
    tomorrow:43
};

function getTempOfTmrw(avgTemperatures){
    'use strict'

    const {tomorrow} = avgTemperatures;
    return tomorrow;
};

console.log(getTempOfTmrw(AVG_TEMP));


 //Destructuring Assignment with Nested OBjects
 const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(LOCAL_FORECAST){
    'use strict';

    const { tomorrow: {max}} = LOCAL_FORECAST;
    return max;
    /* Different Implementation; Same results
    const {tomorrow: { max: maxOfTomorrow}} = LOCAL_FORECAST;
    return maxOfTomorrow; */

}
let maxTempOfTmrw = getMaxOfTmrw(LOCAL_FORECAST);
console.log(maxTempOfTmrw);

const [x, y,  ,  , z] = [1, 2, 3, 4];
console.log(x, y,z)


//Destructuring an Array Assignment with the REST Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
     const [ , , ...arr] = list;
     return arr;
 }
console.log(removeFirstTwo(source))
console.log(source);

function anyFunction(arr){
    let newArray = []
    for (let i = 0; i < arr.length; i++){
        newArray.push(`<li `)
    }
}


//Destructuring an Array Assignment with the REST Operator
source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
     const [ , , ...arr] = list;
     return arr;
 }
console.log(removeFirstTwo(source))
console.log(source);