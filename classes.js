// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.
// always add method name as constructor
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

// The Constructor Method
// The constructor method is a special method:
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method

class user{
    constructor(username,useremail,password){
        this.username = username
        this.useremail = useremail
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changerusername(){
        return `${this.username.toUpperCase()}`
    }
}
const name = new user("Ahsan","shah@email.com","1234")
// console.log(name.encryptpassword());
// console.log(name.changerusername());



// behind the scene 

function tea(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
tea.prototype.encryptpassword = function(){
    return `${this.password}ilu`
}
const newname = new tea("Ahsan","shah@email.com","1234")
// console.log(name.encryptpassword());
// console.log(name.changerusername());

// example of class constructor
// class person{
//     constructor(uName,uAge){
//         this.uName = uName
//         this.uAge = uAge
//     }
//     detail(){
//         console.log(`the age of ${this.uName} is ${this.uAge}`);
//     }
// }
// const p = new person('saddam',20);
// p.detail()



// another example
// class friend{
//     constructor(uName,uEmail){
//         this.uName = uName
//         this.uEmail = uEmail
//     }
//     detail(){
//         console.log(`${this.uName} email is ${this.uEmail}`);
         
//     }
// }
// const p = new friend('saddam','123@gmail.com');
// p.detail()


// one more example 
class subject{
    constructor(eng,math,phy,chem){
        this.eng = eng
        this.math = math
        this.phy = phy
        this.chem = chem
    }
    detail(){
        console.log(`price of ${this.eng}  is 200`);
        console.log(`price of ${this.chem} is 300`);
        console.log(`price of ${this.math} is 400`);
        console.log(`price of ${this.chem} is 500`);

    }
}
const p = new subject('english','maths','physics','chemistry')
// p.detail()
// to add new values we can create new object e.g
const q = new subject('java script','python','node js','react')
// q.detail()


// Class Inheritance
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

// why we use inheritance
// It allows programmers to create new classes based on existing classes, enabling code reusability and organisation.
// we use this function by using "EXTEND" keyword

class Animail{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(`${this.name} is jumping and his color is ${this.color}`);  
    }
}
// const ability = new Animail('monkey','brown')
// ability.run()

class monkey extends Animail{
    eatBanana(){
        console.log(`${this.name} is eating banana`);
    }
}
let ani = new Animail('donkey','black')
let m = new monkey('dog','brown')
// ani.run()
// m.run()



// static 
// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.

// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

// static method are those method which are associated with class and not with instance

// example
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!"; 
    //   console.log(myCar.hello);
    }
    
  }
  
  const myCar = new Car("Ford");
//   console.log(myCar);
  
  
  
  
  
