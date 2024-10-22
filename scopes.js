// scopes in a lengthy topic lets do this
// {} these curly braces are called scopes while braces also comes in objects but in objects braces means object decleration
// Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:
// 1- Block scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block

// 2- Function scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:

// 3- Global scope
// function which decleared ouside a scope is called global scope
// example: let global variable decleared with let x = 2 and donot belong to a window object
// let a = 200
// let b = 100
// var c = 500
// if (true){
//     let a = 10
//     const b = 20 
    // console.log('result:',a);
    // console.log('ans',b);
    // var c = 670
    // console.log(c);
    
// }
// console.log(b);
// console.log(c);
// console.log(a);


// nested scope;
// function inside function

function one(){
    const myname = 'Ahsan'

    function two (){
        const mywebsite = "shah@myeamil.com"
        // console.log(myname);
    }
    // console.log(mywebsite);
    two()
}
one()


// function yellow(){
//     const colorcode = 'fff3344'
//     function green(){
//         const colourpalate = '#gh54c64'
//         console.log(colorcode);
//         console.log(colourpalate);
//     }
  
//     green()
// }
// yellow()

// how to use scopes in if statement
// if (true){
//     const passion = "charted Accountant"
//     if (passion === "charted Accountant"){
//         const million = "mission passed CA"
//         console.log(  (passion) + (million));
//     }
// }


// function addnumber(number){
//     return number+2
// }
// console.log(addnumber(6));
// const addnumberself = function(number){
//     return number-1
// }
// console.log(addnumberself(8));


