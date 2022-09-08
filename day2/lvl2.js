// Using console.log() print out the following statement:
let phrase = '\'There is no exercise better for the heart than reaching down and lifting people up.\''
let firstName = 'John'
let lastName = 'Holmes'
let adj = 'help'

let sentence = 'The quote ' + phrase + ' by ' + firstName + ' ' + lastName + ' teaches us to ' + adj + ' one another'

console.log(sentence)
console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let number = 10
console.log(10 == number)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num = '9.8'
let numCeil = Math.ceil(num)

console.log(parseInt(numCeil)) // 10

// Check if 'on' is found in both python and jargon

let py = 'python'
let jar = 'jargon'

py.indexOf('on') // 4
jar.indexOf('on') // 4

// I hope this course is not full of jargon. Check if jargon is in the sentence.

const jargon = 'I hope this course is not full of jargon'

jargon.indexOf('jargon') // 34



// Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.random()
let zeroToHundred = randomNumber * 110
let zeroToHundredFloor = Math.floor(zeroToHundred)
console.log(zeroToHundredFloor)

// Generate a random number between 0 and 255 inclusively.

let zeroToTwoFiftyFive = randomNumber * 256
let zeroToTwoFiftyFiveFloor = Math.floor(zeroToTwoFiftyFive)

// Access the 'JavaScript' string characters using a random number.

let string = 'Javascript'
// random number from zero to ten
let zeroToTen = randomNumber * 11
let zeroToTenFloor = Math.floor(zeroToTen)
let randomLetter =  string[zeroToTenFloor]

console.log(randomLetter) 
// output --> letter


