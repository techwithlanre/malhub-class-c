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

function greetings() {
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
console.log(fruitsList[4]);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2, 5);
console.log(citrus);