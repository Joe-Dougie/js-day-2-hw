//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
function display_favs() {
    for (let i = 0; i < Object.keys(person3).length; i++) {
        console.log(Object.values(person3)[i])
        console.log(Object.keys(person3)[i])
    }
}

(display_favs(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
class Person {
    constructor(name, age, country, language) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.language = language;
    }
    // Use an arrow to create the printInfo method
    printInfo = () => {
        return `${this.name} is ${this.age} years old. ${this.name} lives in ${this.country} and primarily speaks ${this.language}.`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    addAge = (age) => {
        return `Happy Birthday! ${this.name} is now ${++this.age} years old.`
    }
    // Adding to the age
}
let person1 = new Person('Christian', 26, 'USA', 'English');
let person2 = new Person('Nicolle', 31, 'USA', 'English');

console.log(person1.printInfo());
console.log(person1.addAge());
console.log(person2.printInfo());
console.log(person2.addAge());
console.log(person2.addAge());
console.log(person2.addAge());


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const bigWord = (string1) => {
    return new Promise((resolve, reject) => {
        if (string1.length > 10) {
            resolve(string1)
        } else {
            reject("nop")
        }
    })
}

bigWord("casino")
    .then(
        (result) => { console.log(`Big Word: ${result}`) }
    )
    .catch(
        (error) => { console.log(`Small Number: ${error}`) }
    );