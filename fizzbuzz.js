console.log('\nExercise 2----FizzBuzz');
let countingNumbers;
for (countingNumbers = 1; countingNumbers <= 100; countingNumbers++){
    if (countingNumbers % 3 == 0 && countingNumbers % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (countingNumbers % 3 == 0){
        console.log('Fizz');
    }
    else if (countingNumbers % 5 == 0 ){
        console.log('Buzz');
    } else{
        console.log(countingNumbers);
    }
}