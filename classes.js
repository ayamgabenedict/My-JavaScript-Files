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