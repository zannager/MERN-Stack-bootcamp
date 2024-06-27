// window object, DOM, local storage
// let heading = document.querySelector('h1')
// heading.innerText = "PHP"
// console.log(document.URL)
// window.alert('learning js')
// window.localStorage.removeItem('test')

// var let cons
//var
// var n = 'greg'
// n = 'red'
// alert(n)

//let
// let n1 = 'greg'
// n1 = 'green'
// alert(n1)

// if(true) {
//     var n2 = 'zen'
//     let n3 = 'desk'
//     alert(n3)
// }
// alert(n2)

//const
// const n4 = "blue";
// n4 = "black";
// alert("n4");

//const and object
let obj = new Object(); // or can be written as: let obj={};
obj = {
  name: "ryan",
};
console.log(obj.name);

const newObj = {
  name: "greg",
};
newObj.name = "red";
console.log(newObj.name);

//template strings
let fname = "ryan";
let lname = "bangs";
let age = prompt("guess ryan's age..");

//old way
// let result = fname + " " + lname + " is " + age + " years old";

//new
let result = `${fname} ${lname} is ${age} years old`;

alert(result);
