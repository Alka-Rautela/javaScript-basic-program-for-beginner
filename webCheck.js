let userEmail = 'abcd13';
let password = '1234';

let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)){
        return "Nice Gmail";
    }
    return "use correct keywords!!!"; 
}

let passChecker = function(pass){
    if ((pass.includes('@',123)) && (pass.length >= 8)){
        return 'strong password';
    }
    return 'password is not strong enough!!!'
}

console.log(userChecker(userEmail));
console.log(passChecker(password));