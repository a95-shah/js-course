// A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It is used for handling asynchronous operations, such as making API calls or reading files, in a more organized and readable way.
//  Promises have three states: Pending: The initial state.
// fullfilled  the result value
// rejected    the error

// lets make promises 
// one||||

const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log('promise fulfilled');
        resolve()
    },1000)
})
// promise consume
promiseone.then(function(){
    // console.log('promise completed');
    
})

// promise-2

new Promise (function(resolve,reject){
    setTimeout(function(){
        // console.log('async task complete');
        resolve()
    },1000)
}).then(function(){
    // console.log('consumed fullfilled');
})


// promise-3 passing data
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log('data fetch sucessfully');
        resolve({id:'022',username:'ahsan',useremail:'shahmygmail.com',password:'786123'})
    },1000)
})
promiseThree.then(function(user){
    // console.log("system updated sucessfully");
    console.log(user);    
})


// promise 4 passing data with reject
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'Ahsan-Shah',program:'web-development',duration:'2-months'})
        }else{
            reject('Error: data not found');
        }
    })
})
promisefour.then(function(data){
    // console.log(data);
    return data.username
}).then(function(x){
    // console.log(x,'To be a Full-Stack developer');
}).catch(function(error){
    // console.log(error);
    
}).finally(function(){
    // console.log('code by Ahsan');
})


// promise 5 using async method try catch

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({name:'Ahsan',graduate:'computer science',gpa:'3.5',year:'2024'})
        }else{
            reject('Error: invalid command')
        }
    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
// consumePromiseFive()








