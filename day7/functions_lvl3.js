// 1) Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
const userIdGeneratedByUser = () => {
    let characters = 'ABCDEFGHIJKLMlengthOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let characterLength = Number(window.prompt('Enter character length: '));
    let numberOfIds = Number(window.prompt('Enter the number of ids'))
    let result = [];
    for(i = 0 ; i < numberOfIds ; i++){
        result[i] = "";
        for(k = 0 ; k < characterLength ; i++) {
            result[i] += characters.charAt(Math.floor(Math.random() * characterLength))
        }
    }
    console.log(result)
    result.forEach(function (id) {
        console.log(id);
    })
    return result;
}
userIdGeneratedByUser();

// 2) Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () => {
    const first = Math.round(Math.random() * 256) 
    const second = Math.round(Math.random() * 256) 
    const third = Math.round(Math.random() * 256) 
    return `rgb(${first},${second},${third})`;
}
rgbColorGenerator();

