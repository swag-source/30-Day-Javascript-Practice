// 11) Develop a small script which generate array of 5 random numbers

const n = window.prompt('Enter a number: ')
const myArr = []
for(let i = 0 ; i < n ; i++ ) {
    let int = Math.round(Math.random()*11)
    myArr.push(int)
}
console.log(myArr)