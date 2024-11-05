// Data Types in js

// number (2 to power 53)
// bigint  (big number)
// string  ("abc"def"ghi"jkl"mno"pqr"stu")
// Boolean (true/false)
// null  (it is a stand alone value and it is a representation of empty value)
// undefined (in this you din't assigne a value in decleared variable)
// Symbol (it is used to find uniqueness mostly used in react)
// object (In JavaScript, an object is a standalone entity, with properties and type)
// Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// premitive data types:
// there are 7 premitive data types
// numbers,boolians,string,bigint,null,undefined,symbol
// non-premitive are array,object and function


// conversion of data types 
// let score = 33
// console.log(typeof score);  (this will give number)

// let score = "33"
// console.log(typeof score);  (this will give String)
// let valueInNumber = Number(score) 
// console.log(valueInNumber); (now this convert string to number)

// "33" => 33
// 33abc => NaN 
// 
// so we can convert all data types into another type


// .............................Operations..........................

// let value = 3
// let negValue = -value
// console.log(negValue);  "so we can convert possitive value to negative value"

// "so there are many operations in java script such as"

// addition       +
// subtraction    -
// division       /
// modulus        %
// power          **

// Prefix
// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n

// .................................................//

// Postfix
// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n


// countered or the flow is broken.
// const food = 'salad';
// switch (food) {
//   case 'oyster':
//     console.log('The taste of the sea 🦪');
//     break;
//   case 'pizza':
//     console.log('A delicious pie 🍕');
//     break;
//   default:
//     console.log('Enjoy your meal');
// }

// const name = 'ahsan'
// switch (name) {
//     case 'ahsan':
//         console.log('web developer');
//         break;
//     case 'saad':
//         console.log('charted Accountant');
//         break;
//     case 'jan':
//         onsole.log('Realtor');
//         break;
//     default:
//         console.log("good luck");
        
//         break;
// }

// arrays
let text = "HELLO WORLD";
// let char = text.charAt(0);
let char = text.charCodeAt(0);
// console.log(char);


let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);





