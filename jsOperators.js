//JS Operators
let num1= 6;
let num2= 3;
let ans;

console.log(`\nArithmetic Operators`)
ans = num1 + num2
console.log(`Addition is: ${ans}`)
ans = num1 - num2
console.log(`Subtraction is: ${ans}`)
ans = num1 * num2
console.log(`Multiplication is: ${ans}`)
ans = num1 ** num2
console.log(`Exponentiation is: ${ans}`)
ans = num1 / num2
console.log(`Division is: ${ans}`)
ans = num1 % num2
console.log(`Modulus is: ${ans}`)

console.log("\nComparative Operators")
console.log(`num1 is greater than num2: ${num1 > num2}`)
console.log(`num2 is less than num1: ${num2 < num1}`)
console.log(`num1 is greater than or equal to num2: ${num1 >= num2}`)
console.log(`num2 is less than or equal to num1: ${num2 <= num1}`)
console.log(`num1 is equal to num2: ${num1 == num2}`)
console.log(`num1 is strict equal to num2: ${num1 === num2}`)
console.log(`num1 is not equal to num2: ${num1 !== num2}`)

console.log("\nLogical Operators")
console.log(`Logical And: 1 and 1= ${1 && 1} `) 
console.log(`Logical And: 0 and 1= ${0 && 1} `) 
console.log(`Logical And: 1 and 0= ${1 && 0} `) 
console.log(`Logical And: 0 and 0= ${0 && 0} `) 

console.log("\n")
console.log(`Logical Or: 1 or 1= ${1 || 1}`) 
console.log(`Logical Or: 1 or 0= ${1 || 0}`) 
console.log(`Logical Or: 0 or 1= ${0 || 1}`)  
console.log(`Logical Or: 0 or 0= ${0 || 0}`) 

console.log("\nBitwise Operators")
console.log(`Bitwise XOR: 1 ^ 1 =  ${1 ^ 1}`) 
console.log(`Bitwise XOR: 0 ^ 1 =  ${0 ^ 1}`)
console.log(`Bitwise XOR: 1 ^ 0 =  ${1 ^ 0}`)
console.log(`Bitwise XOR: 0 ^ 0 =  ${0 ^ 0}`)
console.log("\n")
console.log(`Bitwise AND: 1 & 1 =  ${1 & 1}`) 
console.log(`Bitwise AND: 0 & 1 =  ${0 & 1}`)
console.log(`Bitwise AND: 1 & 0 =  ${1 & 0}`)
console.log(`Bitwise AND: 0 & 0 =  ${0 & 0}`)
console.log("\n")
console.log(`Bitwise OR: 1 | 1 =  ${1 | 1}`) 
console.log(`Bitwise OR: 0 | 1 =  ${0 | 1}`)
console.log(`Bitwise OR: 1 | 0 =  ${1 | 0}`)
console.log(`Bitwise OR: 0 | 0 =  ${0 | 0}`)

console.log("\n")
console.log("Assignment/ Augmented assignment Operators")
ans = 20
console.log(`=: Assigning an integer literal to a variable: ans = ${ans}`)
ans += 20
console.log(`+=: Addition assignment: ans+=${20} = ${ans}`)
ans -= 10
console.log(`-=: Subtraction assignment: ans-=${10} = ${ans}`)
ans *= 2
console.log(`*=: Multiplication assignment: ans*=${2} = ${ans}`)
ans /= 6
console.log(`/=: Division assignment: ans/=${6} = ${ans}`)
ans %= 5
console.log(`%=: Division assignment: ans%=${5} = ${ans}`)
ans **= 3
console.log(`**=: Division assignment: ans**=${3} = ${ans}`)


  
 


