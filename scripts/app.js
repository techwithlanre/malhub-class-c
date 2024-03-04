function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function remainder(num1, num2) {
    return num1 % num2;
}


const showAge = function () {
    return 21;
}

function greetings_x() {
    let name = "Jamiu";
    let timeOfTheDay = "morning";
    return "Good " + timeOfTheDay + ", " + name;
}

//elements = 3
//max index 2
let names = ["Basit", "Taiwo", "Bilal"];
names.push('Feranmi', 'Tunde');
names.pop();
//console.log(names);




const fruitsList = ["Banana", "Orange", "Apple", "Mango"];
fruitsList.splice(2, 0, "Lemon", "Kiwi");
//console.log(fruitsList[4]);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2, 5);
//console.log(citrus);



//String functions
const myName = "Jamiu";
//console.log(myName.charAt(3));

const str1 = "Hello";
const str2 = "World";

//console.log(str1.concat(" ", str2));

const str_x = 'Hello World';
//console.log(str.includes('World'));

const greetings = 'Welcome Tunde';
//console.log(greetings.lastIndexOf("e"));
//console.log(greetings.slice(0, 7));

const str = 'Hello World';
console.log(str.substr(6, 5)); 
