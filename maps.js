// maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// How to Create a Map
// You can create a JavaScript Map by:
// Passing an Array to new Map()
// Create a Map and use Map.set()

const map = new Map
map.set('pak','pakistan')
map.set('fr','france')
map.set('ch','china')
// console.log(map);
// applying forof loop
for (const [value] of map) {
    // console.log(value);
    
}


const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// console.log([fruits]);
// console.log( fruits.get('apples'));
// console.log(fruits instanceof Map);


//                   difference b/w maps and objects
// Object                                                    	Map
// Not directly iterable	                              Directly iterable
// Do not have a size property	                          Have a size property
// Keys must be Strings (or Symbols)	                  Keys can be any datatype
// Keys are not well ordered	                          Keys are ordered by insertion
// Have default keys                                     Do not have default keys



// The new Map() Method
// You can create a map by passing an array to the new Map() constructor:
// Create a Map
const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
//   console.log(fruit);
// console.log(fruit.size);return no of elements
// console.log(fruits.delete("apples"));deleate element
// fruits.clear();clear all elements
// fruits.has("apples");question does it available





  



