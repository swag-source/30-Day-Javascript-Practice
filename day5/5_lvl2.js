// 1) Declare an empty array
const arr = []

// 2) Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5]

// 3) Find the length of your array
console.log('length of array: ', numbers.length) // 5

// 4) Get the first item, the middle item and the last item of the array

let first = numbers[0]
let middle = numbers[2]
let last = numbers[4]
console.log(first, middle, last)

// 5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [
    'Ramiro',
    '25',
    '1.70cm',
    'Argentinian',
    'White',
    true
]

// 6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

var itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]

// 7) Print the array using console.log()

console.log(itCompanies)

// 8) Print the number of companies in the array

console.log('number of companies: ', itCompanies.length) // 7

// 9) Print the first company, middle and last company

console.log('first company: ', itCompanies[0])
console.log('middle company: ', itCompanies[3])
console.log('last company: ', itCompanies[6])

// 10) Print out each company

console.log(itCompanies.toString(' '))

// 11) Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// 12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let slice = itCompanies.slice(0, 6)
let sentence = slice.join(', ')
console.log(sentence + ' and ' + itCompanies[6] + ' are big IT companies')

// 13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = itCompanies.indexOf(prompt('Enter a company'))

if ( company === -1) {
    console.log('The company does not exist')
} else {
    console.log('The company exists in the IT field')
}

// 15) Sort the array using sort() method

console.log(itCompanies.sort())

// 16) Reverse the array using reverse() method

console.log(itCompanies.reverse())

// 17) Slice out the first 3 companies from the array

console.log(itCompanies.slice(3, 6))

// 18) Slice out the last 3 companies from the array

console.log(itCompanies.slice(0, 4))

