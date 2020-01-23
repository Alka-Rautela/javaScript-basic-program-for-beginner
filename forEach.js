//const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
//days.forEach(function (day, index) {
//    console.log(day +"->"+ (index + 1));
//})

const toDo = ['Java', 'English', 'Painting', 'Running', 'Stretching'];
console.log("Things to do-->")
toDo.forEach(function(work, priority) {
    console.log(`${priority + 1} : ${work} `)
})