// 1) First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split('.'))
console.log(text.split(', '))
console.log(text.split(' ').length)

// 2) In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart[4] = 'Strawberry'
shoppingCart [5] = 'Water'
shoppingCart.push('Sugar')
shoppingCart.unshift('Meat')

let indexOfTea = shoppingCart.indexOf('Tea')
shoppingCart[indexOfTea] = 'Green Tea'

console.log(shoppingCart)

// 3) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
let indexOfEthiopia = countries.indexOf('Ethiopia') + 1 
if (indexOfEthiopia === -1) {
    countries.push('Ethiopia')
} else {
    console.log('Ethiopia is the ' + indexOfEthiopia + 'th country in the array')
}

// 5) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let indexOfSaas = webTechs.indexOf['Saas']

if (indexOfSaas === -1 ) {
    console.log('Saas is a CSS preprocess')
} else {
    console.log('Saas is not in the array')
    webTechs.push('Saas')
}

// 6) Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)