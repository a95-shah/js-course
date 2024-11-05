// prerequset

// const userobject = {
//     name: "Saddam",
//     usermail: "Shah.software.com",
//     price: '$199',

//     welcomeMessage: function(){
//         console.log(`${this.name} ,welcome to cosmatics & your price is ${this.price} `);
//     }
// }
// userobject.welcomeMessage()
// userobject.name='Ahsan'
// userobject.welcomeMessage()



// basic arrow function

// Arrow function with two parameters 
// const sum = (firstParam, secondParam) => { 
//     return firstParam + secondParam; 
//   }; 
//   console.log(sum(2,5)); // Prints: 7


// const addition =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addition(2,4));

// teronary operator
let price = 10.5;
let day = "tuesday";

day === "Monday" ? price -= 1.5 : price += 1.5;
// console.log(day,price);


const weeksInYear = Math.floor(365/7);

// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;

// console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");




// const addnumber=(num1,num2)=>{
    // return num1+num2
// }
// console.log(addnumber(2,8));

// impleset return
// const addnumber=(num1,num2)=> num1+num2
// console.log(addnumber(2,5));

// const addnumber=(num1,num2)=> (num1+num2)
// console.log(addnumber(2,5));

// global scopes creates pollution offenly so we use iifi to remove pollution of variables in global scope 
// iifie means immediately invoked function expression
//  (function user (){
//     console.log('user connected');
//  }());
//  (function user (){
//     console.log('user connected by self');
//  }())

// (function user (){
//     console.log('user connected');
//  }());
//  ((name) => {
//     console.log(`user ${name} connected by self`);
//  })('Ahsan')

// java script execution context
// it means how java script executed your file
// java script run your files in 2 phases



// Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in map , filter , and other common array methods

const myNum = [1,2,3,4,5,6,7,8,9]
const newNum = myNum.filter((num)=>{
    return num>4
})
// console.log(newNum);