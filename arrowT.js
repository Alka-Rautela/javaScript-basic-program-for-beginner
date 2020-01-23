//Assignment
const todos = [{
    title: 'Brush',
    isDone: false,
}, {
    title: 'fresh',
    isDone: true,
},{
    title: 'Breakfast',
    isDone: true,
}, {
    title: 'Lunch',
    isDone: false,
},{
    title: 'running',
    isDone: true,
},{
    title: 'Bath',
    isDone: false,
}]

const thingsDone = todos.filter((dones) => dones.isDone == true);
console.log(`Things that has been done -->`)
thingsDone.forEach((value, index) => console.log(`${index +1} - ${value.title}`));


console.log('-----------------------------------------------')


const thingsNotDone = todos.filter((undones) => undones.isDone == false);
console.log('Things to do--->')
thingsNotDone.forEach((value, index) => console.log(`${index +1} - ${value.title}`));
