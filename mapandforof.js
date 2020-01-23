var john = {
    name: 'I am John',
    age : 20,
    isActive: true,
}

var marry = {
    name: 'I am Marry',
    age : 27,
    isActive: true,
}

var jane = {
    name: 'I am Jane',
    age : 35,
    isActive: false,
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('jane', jane)

//console.log(users);
//console.log(users.size);
//console.log(users.get('jane'));

//console.log(users.keys());
//console.log(users.values())

//for (const iterator of object){}

//for (const key of users.keys()){
//    console.log(key);
//}

//for (const value of users.values()){
//    console.log(value.name);
//}
//
//for (const [key, value] of users.entries()){
//    console.log(key + '=' + value.name);
//}
//
//users.forEach((value, key) => console.log(key + '=' +value.name))

//array of array with map
var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrofArr)

console.log(newMap);