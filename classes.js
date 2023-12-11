//Class
class Person{
    constructor(f_name, l_name,age, gender, dob, password){
        this.f_name = f_name
        this.l_name = l_name
        this.age = age
        this.gender = gender
        this.dob = new Date(dob)
        this.password = password
    }
    getBirthDay(){
        return `Your day of birth is ${this.dob.getDay()}`
    }
    getBirthYear(){
         return `Your year of birth is ${this.dob.getFullYear()}`
    }
    Password(newPassword){
       this.password = newPassword
       return `This is your new password: ${this.password}`
    }
    PersonRecord(){
       return `Name:${this.f_name} ${this.l_name}   Age: ${this.age} `
    }
}
const person = new Person("Joe", "Ayamga", 25, "Male", "04-08-1973", "12345");
console.log(person);
console.log(person.Password("678910"));
console.log(person.PersonRecord());
console.log(person.getBirthYear());


//Example 2
function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = (temp -32) * 5/9;
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


//Example 3
class Books {
    constructor(title, author, year){
        this.title= title;
        this.author= author;
        this.year= year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;    
    }
    getAge(){
        let years= new Date().getFullYear()- this.year;
        return `${this.title} is ${years} years old`; 
    }
    revise(newYear){
        this.year= newYear;
        this.revised = true;
    }

//Static method, no need to instantiate it
static topBookStore(){
    return `Barnes & Noble`;
    }
}
console.log(Books.topBookStore());

//Magazine Subclass, --Easier using this as compared to Inheritance
class Magazine extends Books{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month= month;
    }
}
const maga= new Magazine('Mag Two', 'Efia Akoto', '1999', 'Oct');
console.log(maga);
console.log(maga.getSummary());
maga.revise(2012)
console.log(maga);


//Instantiate Object
const book1= new Books('Book Seven', 'Mary Agyemang', '2015');
console.log(book1);
book1.revise('2020');
console.log(book1);