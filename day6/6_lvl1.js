// 1) Iterate 0 to 10 using for loop, do the same using while and do while loop
// for case

for(let i = 0 ; i <= 10 ; i++) {
    console.log(i)
}

// while
let i = 0
while (i <= 10){ 
    console.log(i)
    i++
}

// do while
let i = 0
do {
    console.log(i)
    i++
} while (i <= 10 )

// 2)  Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let i = 10; i >= 0 ; i--) {
    console.log(i)
}

// while 
let i = 10
while (i >= 0) {
    console.log(i)
    i--
}

// do while
let i = 10
do {
    console.log(i)
    i--
} while (i >= 0)


// 3) Iterate 0 to n using for loop

let n = window.prompt('enter the nth value')
for(let i = 0; i <= n; i++) {
    console.log(i)
}

// 3) Write a loop that makes the following pattern using console.log():

let n = 7
for(var i = 1 ; i <= n ; i ++){
    console.log('*'.repeat(i))
}

// 5) Use for loop to iterate from 0 to 100 and print only even numbers
let n = window.prompt('enter amount of terms')
for(var i = 0 ; i <= n ; i++){
    if(i % 2 !== 0) {
        continue
    } else {
        console.log(i)
    }
}

// 6) Use for loop to iterate from 0 to 100 and print only odd numbers

let n = window.prompt('enter amount of terms')
for(var i = 0 ; i <= n ; i++) {
    if (i % 2 == 0) {
        continue
    } else {
        console.log(i)
    }
}

// 7) Use for loop to iterate from 0 to 100 and print only prime numbers


// 8) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let n = 100
let sum = 0;
for(var i = 0 ; i <= n; i++) {
    sum = sum + i;
}
console.log('The sum of all numbers from 0 to ' + n + ' is ' + sum)

// 9) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

const n = 10
let even = 0
let odd = 0
for(var i = 0 ; i <= n ; i++){
    if(i % 2 !== 0){
        even = even + i
    } else {
        odd = odd + i
    }
}
console.log('the sum of all evens is: ' + even + '\n' + 'the sum of all odds is: ' + odd)


// 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

const n = 100
let even = 0
let odd = 0
for(var i = 0 ; i <= n ; i++){
    if(i % 2 !== 0){
        even = even + i
    } else {
        odd = odd + i
    }
}
console.log([odd, even])

// 11) Develop a small script which generate array of 5 random numbers
const n = window.prompt('Enter a number: ')
const myArr = []
for(let i = 0 ; i < n ; i++ ) {
    let int = Math.round(Math.random()*11)
    myArr.push(int)
}
console.log(myArr)

