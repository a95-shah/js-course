// why we use call back function
// We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function) from running until they're completed, as you're probably used to. Instead, it will execute in the background while the rest of the code runs.
function myDisplayer(name) {
    console.log(`the result of this function is ${name}`);
    
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  //   console.log(myCalculator(5, 6, myDisplayer));




// setTimeout(myFunction, 3000);

// function myFunction() {
// // console.log('my name');
// }

// we can pass one function inside second function as a parameter
// e.g

function sayHi(){
  console.log('hii');
}

function sayHello(){
  console.log('hello');
  // sayHi()
  
}

function add(num1,num2,callback){
  console.log(num1+num2);
  callback()
}
let a = 5
let b = 10
// add(a,b,sayHello)
// add(8,4,sayHi)
// we can pass anomanous function as well in add function like
// add(6,6,function(){
  // console.log('bye');
// })


// using arrow function
const calculate = (a,b,operation) =>{
  return operation(a,b);
}

const addition = calculate(3,4,function(num1,num2){
  return num1+num2
})
// console.log(addition);

const subtraction = (a,b)=> a-b;
const subresult = calculate(6,2,subtraction)
// console.log(subresult);

function multiply (a,b){
  return a*b
}
const mulResult = calculate(3,8,multiply)
// console.log(mulResult);

const nums = [4,1,5,-2,-5,3,2,-8,6,7]
const firstNeg= (num)=>{
  return num < 0;
};
const result = nums.findIndex(firstNeg);
// console.log(result);



// 








  
