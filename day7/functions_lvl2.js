// 2) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// ((-1 * b + Math.sqrt(b * b - 4 * a * c)) / 2 * a)
// ((-1 * b - Math.sqrt(b * b - 4 * a * c)) / 2 * a)

function solveQuadratic (a = 0, b = 0, c = 0) { 
    let x1 = ((-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a))

    let x2 = ((-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a))

    let discriminant = Math.pow(b, 2) - (4 * a * c)

    if (discriminant > 0) {
        return 'The function has two solutions: ' + x1 + ' , ' + x2 
    } else if (discriminant === 0) {
        return 'The function has two repeated roots: ' + x1
    } else {
        return 'the function has no real values'
    }
}

console.log(solveQuadratic(1, 4, 4))

// 4) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime () {
    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours() + ':' + date.getMinutes()
    let format = `${day}/${month}/${year} ${hour}`
    return format
}
showDateTime();

// 5) Declare a function name swapValues. This function swaps value of x to y.

function swapValues (a, b) {
    let x = b;
    let y = a;
    console.log('x = ' + x , ', y = ' + y);
}
swapValues(2, 3);

// 9) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (index) => {
    let array = ['John', 'Doe', 'Frank', 'Twat']
    array.splice(index)
    return array;
}
removeItem(0);


// 13) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (n) => {
    let even = 0
    let odds = 0
    for(let i = 0 ; i <= n ; i++) {
        if (i % 2 === 0) {
            even++
        } else {
            odds++
        }
    }
    return `the amount of odds are:  ${odds} \n the amount of evens are: ${even}` 
}
evensAndOdds(100);

// 15) Write a function which generates a randomUserIp.

const randomUserIp = () => {
    let first = Math.round(Math.random(Math.floor()) * 255)
    let second = Math.round(Math.random(Math.floor()) * 255)
    let third = Math.round(Math.random(Math.floor()) * 255)
    let fourth = Math.round(Math.random(Math.floor()) * 255)
    const ipAddress = `${first}.${second}.${third}.${fourth}`

    return ipAddress;
}
console.log('Your IPv4 address is: ' + randomUserIp())

// 18) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

const userIdGenerator = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMlengthOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let characterLength = characters.length;
    for(let i = 0 ; i < length ; i++) {
        result += characters.charAt(Math.floor(Math.random() * characterLength))
    }
    return result;
}
console.log(`Your user ID is: ${userIdGenerator(7)}`)

// 19) Factorial function

const factorial = (n) => {
    if (n < -1 ) {
        return 'Cannot calculate factorial'
    } else if (n = 0) {
        return 1
    } else {
        return (n * factorial(n - 1))
    }
}

factorial(4)