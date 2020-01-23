let fruits = ["Apple", "Banana"] //create an array

console.log(fruits.length) //2

//access an array item 
let first = fruits[0] //Apple
let first = fruits[fruits.length - 1]; //Banana

//loop over an array
fruits.forEach(function(item, index, array){
    console.log(item, index)
})  //Apple 0
    //Banana 1



//add to the end of an array
let newLength = fruits.push('Orange'); //This will add orange at the end of array

//remove from the end of an array
let last = fruits.pop() //this deletes the last element of the array

//remove from front of an array
let first = fruits.shift() //this deletes Banana from the array

//add to the front of an array
let newLength = fruits.unshift("Guava"); //this adds Guava at the front of the array

//find the index of an item in the array
let pos = fruits.indexOf('Guava') //0

//removing an item by index position
let removeItem = fruits.splice(pos, 1) //this is how we can remove an item from any position

//removing multiple itemes by a single index position
let vegetable = ["Cabbage", 'Turninp', 'Carrot', "Radish"];
let pos = 1;
let n = 2;
let removedItems = vegetables.splice(pos, n) //n defines the number of items to be removed and pos defines the starting point from where to start deletion

console.log(removedItems) //["Turniip", "Carrot"]


//copy an array
let shallowCopy = fruits.slice()

//Accessing array elements


//constructor
var car = Array() //Creates array obejects

//Static properties
Array.length
get Array[@@species]

//static methods
//Array Instances
//Instance property
//Instance method
    //mutator method
    //accessor method
    //iteration method
    



