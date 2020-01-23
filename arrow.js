//let todo = function(name){
//    return `Hey! ${name}.`
//}
//
//console.log(todo('sammy'));


//this is arrow function 
//this is a lot more easier 

//method 1
let todo = (name) => {
    return `Hey! ${name}.`
}
console.log(todo('Alka'))

//method 2 easier (here we can declair a function in a single line). You can also use {} cause it makes another coders to understand code easily
let todo2 = (name) => `Hey! ${name}.`
console.log(todo2('Lakshya'));


const todos = [{
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'Go to gym',
    isDone: false,
}, {
    title: 'homework',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone == true) //here we are using arrow function
console.log(thingsDone);

