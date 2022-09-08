// 1) Declare a function fullName and it print out your full name.
function fullName1() {
    let myName = 'Ramiro Seltzer'
    return myName
};
console.log(fullName1())

// 2) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2() {
    let firstName = 'Ramiro'
    let lastName = 'Seltzer'
    return firstName + ' ' + lastName
};
console.log(fullName2());

// 3) Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
    return num1 + num2
};
console.log('The sum of numbers is: ', addNumbers(3, 5))

// 4) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log('The area of the rectangle is: ', areaOfRectangle(3, 4))

// 5) A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log('The perimeter of the rectangle is: ' + perimeterOfRectangle(3, 4))

// 6) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length , width , height){
    let volume = length * width * height
    return volume
}
console.log('The volume of the rectangular prism is: ',volumeOfRectPrism(3, 4, 3))

// 7) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = r => Math.PI * r * r
console.log('The area of the circle is: ',areaOfCircle(1))

// 8) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = r => 2 * Math.PI * r
console.log('The circumference of the circle is: ', circumOfCircle(1))

// 10) Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speed = (distance, time) => distance / time
console.log('The speed of the object is: ' + speed(100, 50) + 'm/s')
 

// 13) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

const BMI = (weight, height) => {
    let bmi = weight / (height * height)
    if(bmi < 18.5){
        console.log('Your BMI is: ' + Math.floor(bmi) + ' Kg/m^2, '+'Underweight')
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log('Your BMI is: ' + Math.floor(bmi) + ' Kg/m^2 '+'Normal weight')
    } else if (bmi > 25 && bmi < 29.9) {
        console.log('Your BMI is: ' + Math.floor(bmi) + ' Kg/m^2, '+'Overweight')
    } else {
        console.log ('Your BMI is: ' + Math.floor(bmi) + ' Kg/m^2, '+'Obese')
    }
}
console.log(BMI(62, 1.70))




