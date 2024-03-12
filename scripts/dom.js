/* const h1 = document.getElementsByTagName('h1');
console.log(h1[0].textContent);
console.log(h1[1].innerHTML) */



const button  = document.querySelector('#submitButton');
const body  = document.querySelector('body');
var firstName  = document.querySelector('#firstName');
var lastName  = document.querySelector('#lastName');
/* button.addEventListener("click", (event) => {
    event.preventDefault();
    firstName.value = "My name is jamiu";
    lastName.value = "";
}); */

body.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);  //button
    console.log(event.currentTarget); // body
});




