// memory in js is defined in two type
// 1-  stack memory
// 2-  heap memory

// all premititve data types comes in stack memory and this will return copy
let userName = 'ahsan'
let anotherName = userName
anotherName = 'ali'
// console.log(anotherName);
// in this example the answer is ali but you do changes in copy oregional memory remains same


// all non premitive data types comes in heap memory and this wil return reference
let userone = {
    name : 'ahsan',
    email : 'ah@gmail.com'
}
// console.log(userone);
let usertwo = userone
usertwo.email = 'hasan@com'
// console.log(usertwo);
// console.log(userone);
// so in this case changes are done on both oregional value and refrence value 



