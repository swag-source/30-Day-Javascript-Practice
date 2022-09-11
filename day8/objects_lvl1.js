// Create an empty object called "dog"
const dog = {
    name : "Simon",
    legs : "Short",
    age : 13,
    color : "Brown",
    bark : function () {
        return "woof woof"
    },
};
// Print the the dog object on the console
console.log(Object.values(dog))

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// Set new properties to the dog object: breed, getDogInfo
dog.breed = "Beagle"
dog.getDogInfo = function () {
    info = [dog.name , dog.legs , dog.color , dog.age, dog.bark];
    return info;
}