//DOM
//setTimeout
console.log('Program Starts');

setTimeout(() => {
    document.getElementById('name').innerText = 
    'Learn JavaScript in 1 Video by Mehul but in over 8 hours'
}, 1000)
console.log('Program Ends');

//setInterval
console.log('Program Starts');
let i= 0;

setTimeout(() => {
    document.getElementById('name').innerText = ++i;
}, 1000)
console.log('Program Ends');

//clearTimeout
console.log('Program Starts');
i= 0;

let id= setTimeout(() => {
    document.getElementById('name').innerText = ++i;
    if(i==15) {
        clearInterval(id);
    }
}, 1000)

console.log(id);
console.log('Program Ends');

//Event Handlers
let elem = document.getElementById('name');

elem.onclick= function(){
    console.log('something got clicked');
}