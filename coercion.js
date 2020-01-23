console.log('5' - 5); //0 
//but
console.log('5' + 5); //55 
//this is the coercion

console.log(5 + true ); //6
console.log(5 + false); //5 because javaScript treats true as 1 and false as 0


const loginDetails = []
//login for getting details

const loginID = loginDetails[0];

if (loginID !== undefined){
    console.log('Allow user to login.')
}
else{
    console.log('Authentication failed!')
}


//and still if you remove the condition inside if, agin it will display message inside else
const loginDetails2 = []

const loginID2 = loginDetails2[0];

if (loginID2){
    console.log('Allow user to login.')
}
else{
    console.log('Authentication failed!')
}

//if ("") //will display else statement
//if (" ") //now this will display if statement 
//so beaware of coercions