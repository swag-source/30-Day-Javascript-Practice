// 11) Develop a small script which generate array of 5 random numbers

const n = window.prompt('Enter a number for array length: ')
const myArr = []
for(let i = 0 ; i < n ; i++){
    const int = Math.round(Math.random()*11)
    myArr.push(int)
}
console.log(myArr)

// 12) Develop a small script which generate a six characters random id:

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var word = ''
for(let i = 0 ; i < 6 ; i++) {
    if (i % 2 !== 0) {
        const randomLetter = Math.round(Math.random()*letters.length)
        word = word + letters[randomLetter]
    } else {
        const randomNumber = Math.round(Math.random()*numbers.length)
        word = word + numbers[randomNumber]
    }
}
console.log(word)
