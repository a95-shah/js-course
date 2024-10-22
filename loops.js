// itterarions or loops
// Loops are often used in programming.
// Each statement in a loop, including the for statement, is executed for each iteration of the loop.
// Statements or assignments that can be placed outside the loop will make the loop run faster.

// for loop
// for (let i = 0; i <=10; i++) {
//     // const element = i;
//     if (i===5) {
//         // console.log('best number is 5');
        
//     }
    // console.log(element);
  
// }
// table 1 to 10
// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j); 
//     }
// }

// while loop
let index =1
while (index<=10) {
    // console.log('number is',index);
    index = index+2
}

// while loop in array
// let superheroes = ['batman','superman','ironman']
// let arr = 0
// while (arr<superheroes.length) {
//     console.log(`hero is ${superheroes[arr]}`);
//     arr++
// }


// let myfriends = ['saddam','faizyab','siraj']
// let arr = 0
// while (arr<myfriends.length) {
//     console.log(`my friend is ${myfriends[arr]}`);
//     arr++
// }

// do while loop
let score = 1
do {
    // console.log(`score is ${score}`);
    score++
} while (score<=10);

// for off loop
const arr=[1,2,3,4,5]
for (const num of arr){
    // console.log(num);
}

const names = ['ahsan','ali','shah']
for(const name of names){
    // console.log(index(names));
    // index of --- is 0
     
}

names.map((item,index) => {
    console.log(`index of ${item} is ${index}`);
    
})


// const greeting = 'welcome developers'
// for(const greet of greeting){
//     // console.log(greet);
    
// }
 
