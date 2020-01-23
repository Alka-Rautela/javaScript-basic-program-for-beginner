//for using arrow function here you have to explicitly bind 'this' keyword, which we will learn in REACT in future
//most of the times don't use arrow functions in methods and constructor
const camera = { 
    price: 600,
    weight: 1000,
    myDes(){ //a function can also be written like this
        return `This Nikon camera is of $${this.price} and its weight is ${this.weight} gram.` //we cannot access the methods without using this. we've already learnt that 'this' keyword has the access of all methods inside an object
    }
}
console.log(camera.myDes())