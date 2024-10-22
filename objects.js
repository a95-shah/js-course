// singleton
// objects which created with construtor then objects created with singleton (object.create)
// and bjects which created with literals singleton is not created

// object literals:
const mysym = Symbol
const jsuser = {
    name : 'Saddam Hussain',
    email: 'shah.gmail.com',
    age: 18 ,
    [mysym]: 'symbol',
    location: 'abbottabad',
    isLogged: true,
    lastloggedin: ['monday','saturday']
}
// console.log(jsuser);
// console.log(jsuser.email);
// console.log(jsuser['location']);
// console.log(jsuser[mysym]);

// jsuser.greeting = function(){
//     console.log(`Welcome our prime user  ${this.name} The GOAT of Web Development`);string interpolation
// }
// console.log(jsuser.greeting());





// singleton Object:
// const tinderuser = new object () : this is singleton object

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "saddam"
tinderuser.isLogged = true


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

// how to destructure a key
const {name} = tinderuser
// console.log(name);

const fbuser = {
    fullname:{
        userfullname:{
            myname: 'ahsan',
            lastname:'shah'
        }
    }         
}
// console.log(fbuser.fullname.userfullname.lastname);
// how to destructure object in object
const {
    fullname: {
        userfullname: { lastname }
    }
} = fbuser;
// console.log(lastname); 


// how to combine two objects
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',6:'f'}
// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj1[1]);

// console.log(obj4);


// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().
// example:
// "";           // primitive string
// 0;            // primitive number
// false;        // primitive boolean

// {};           // object object
// [];           // array object
// /()/          // regexp object
// function(){}; // function








