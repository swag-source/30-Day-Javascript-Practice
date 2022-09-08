//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt('Enter your age:')
let difference = 18 - age
if (age >= 18) {
    console.log('You are old enough to drive.')
} else {
    console.log('You are left with ' + difference + ' years to drive.')
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 20 
let yourAge = prompt('Enter your age:')

if (myAge > yourAge ) {
    console.log('I am older than you')
} else if (myAge == yourAge) {
    console.log('We are the same age')
} else {
    console.log('You are older than me')
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways\

let a = 4
let b = 3

if (a > b) {
    console.log(a + ' is greater than ' + b)
} else if (a < b) {
    console.log(a + ' is less than ' + b)
} else {
    console.log(a + ' is equal to ' + b)
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = parseInt(prompt('Enter a number: '))
if (number % 2 == 0) {
    console.log(number + ' is an even number.')
} else {
    console.log(number + ' is an odd number.')
}

