// functions

function addnumber(num1,num2){
    console.log(num1+num2);
     num1+num2
}
// addnumber(4,5) this a simple function

function addtwonumbers(num1,num2){
    return num1+num2
}
// const result = (addtwonumbers(4,7))
// console.log('result:',result);
// console.log(typeof result);
// upper function is propper function

function loggedin(username){
    return `${username} just logged inn`
}
// const result = loggedin('usama')
// console.log(loggedin('ahsan'));
// console.log(result);

function myname(fullname ){
    return `my name is ${fullname}`
}
// console.log(myname('syed Ahsan Mukhtar'));

function cartprice(num){
    return `your bill is ${num/2}`
}
// console.log(cartprice(200));


// how to display many numbers through rest operator while ... is called rest and spread operator
function cartprice(...num){
    // return `your bill is ${num}`
    return num

}
// console.log(cartprice(200,400,700));
// console.log(typeof cartprice);



// how object is pass in a function
// const userobj={
//     name:'ahsan',
//     price: 199
// }
// function userfun(anyobj){
//     console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);   
// }
// userfun(userobj)

// example 2 of passing obj in function

const webinterns = {
    name1: 'saddam',
    name2: 'faizyab',
    name3: 'ahsan',
    name4: 'siraj'
}
function frontend(developers){
    // console.log(`${developers.name1} working on React ${developers.name4} working on Laravel while ${developers.name3} and ${developers.name2} is working on JS`);   
    // return developers
}
frontend(webinterns)
// const result = frontend
// console.log( frontend(webinterns));
// console.log(typeof webinterns);

// this is how objects are passed in function


// how aray pass hrough a function
const myarray = [100,200,300,400]
function selectarray(getarray){
    return getarray[2]
}
// console.log(selectarray(myarray));
// this how arry pass through a function

// another example
const webnames = ['saddam','faizyab','siraj','ahsan']
function developer(interns){
    return interns[1]
}
// console.log(developer(webnames));









