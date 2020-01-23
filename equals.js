// == only checks whether the value is equal or not 
// === it checks identity of the operator, especially in OBJECTS
let myVar = {};
let myVarTwo = {};

console.log(myVar == myVarTwo); 
console.log(myVar === myVarTwo); //result is False cause the both objects are different 
