// Weresquirrel
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

//Assessing the members of an object
console.log(day1.squirrel);
console.log(day1['events'][1]);

//Assessing an undefined key
console.log(day1.wolf);

//Adding a new entry to the object
day1.wolf = false;
console.log(day1.wolf);


let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(journal)


//Deleting properties of an object
let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);

//Check if key exist in onject---Returns boolean
console.log("left" in anObject);
console.log("right" in anObject);


// To return the properties of an object
console.log(Object.keys({x: 0, y: 0, z: 2}));


// To return the values of an object
console.log(Object.values({x: 0, y: 0, z: 2}));


//Copy the properties of object to another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);


// Immutability of OBJECTS
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);

console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);

console.log(object3.value);


//Immutability doesn't work with the CONST
const score = {visitors: 0, home: 0};
console.log(score);

score.visitors = 1;
console.log(score);

/* This won't work because it was initially declared with the CONST keyword
score = {visitors: 1, home: 1};
*/

let myStorage = {
    'car': {
        'inside': {
            'gloveBox':'maps',
            'passenger seat':'breadcrumps'
        },
        'outside':{
            'trunk':'speakers'
        }
    }
}
let gloveBoxContents = myStorage.car.inside.gloveBox;
let trunkContents = myStorage['car']['outside']['trunk'];

console.log(gloveBoxContents);
console.log(trunkContents)


//Example of JSON.stringify and JSON.parse
let collection = {
    '2548': {
        'album': 'slippery',
        'artist': 'Bon Jovi',
        'tracks': [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    '2468': {
      'album': '1999',
      'artist': 'Prince',
      'tracks': [
          '1999',
          'Little Red Covette'
      ]
    },
    '1245': {
      'artist': 'Robert Palmer',
      'tracks': []
    },
    '5439': {
      'album': 'ABBA Gold',  
    }
};
console.log(collection);
let collectionCopy = JSON.stringify(collection);
console.log(collectionCopy);
collectionCopy = JSON.parse(collectionCopy);
console.log(collectionCopy);

function updateRecords(id, prop, value){
if (value === ""){
    delete collection[id][prop];
}else if (prop === 'tracks'){
    //collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
}else {
    collection[id][prop] = value;
}
return collection;
}
let updatedRecords = updateRecords(1245, 'tracks', 'Heal the world');
console.log(updatedRecords);



let contacts = [
    {
        'firstName': 'Akira',
        'lastName': 'Laine',
        'number': '0542351336',
        'likes': ['Pizza', 'Coding', 'Brownie Points']
       },
    {
        'firstName': 'Harry',
        'lastName': 'Potter',
        'number': '0206984837',
        'likes': ['Hogwarts', 'Magic', 'Hagrid']
       },
    {
        'firstName': 'Kristan',
        'lastName': 'Vos',
        'number': 'unknown',
        'likes': ['JavaScript', 'Gaming', 'Foxes']
       }
]
function lookup(name, prop){
    for (let i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || 'No such property';
        }
    }   return 'No such contacts';
}

let krist = lookup('Kristan', 'likes');
console.log(krist);