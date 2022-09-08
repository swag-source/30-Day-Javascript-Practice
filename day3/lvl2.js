// Level 2
// 1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt('Enter base', 'Insert base')
let height = prompt('Enter height', 'Insert height')
let area = 0.5 * base * height

console.log(alert('your total area is: ' + area))

// 2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

var sideA = prompt('Enter side A', 'side a value')
var sideB = prompt('Enter side B', 'side b value')
var sideC = prompt('Enter side C', 'side c value')

let a = parseInt(sideA)
let b = parseInt(sideB)
let c = parseInt(sideC)

var perimeter = a + b + c

console.log(alert('Your triangle perimeter is: ' + perimeter))

// 3) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

var lengthRectangle = prompt('Enter length of rectangle', 'length')
var widthRectangle = prompt('Enter width of rectangle', 'width')

let lenght = parseInt(lengthRectangle)
let width = parseInt(widthRectangle)
const rectArea = lenght * width
const perimeter2 = 2 * (lenght + width)

console.log(alert('Your rectangle\'s area is: ' + rectArea))
console.log(alert('Your rectangle\'s perimeter is ' + perimeter2))

// 4) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const Pi = Math.PI
let r = parseInt(prompt('Enter circle radius'))
let circleArea = (Pi * r * r).toFixed(2)
let circumference = (2 * Pi * r).toFixed(2)
console.log(alert('Your circle area is: ' + circleArea + ', rounded to two digits'))
console.log(alert('Your circle\'s circunference is: ' + circumference + ', rounded to two digits'))

// 8) Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

var x = parseInt(prompt('Enter an X value'))
let y = x**2 + 6*x + 9
let sol1 = (-6 + (Math.sqrt(6**2 - 4*1*9)))/2
let sol2 = (-6 - (Math.sqrt(6**2 - 4*1*9)))/2
console.log(alert('the function Y evaluated at X =' + x + ' is equal to ' + y))
console.log(alert('Y function has zeroes at: \n' + sol1 + ' and ' + sol2))

// 9) Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = parseInt(prompt('Enter your working hours:'))
let rate = parseInt(prompt('Enter your rate:'))
weeklySalary = hours * rate
console.log(alert('Your weekly earning is \n' + weeklySalary + 'USD' ))

