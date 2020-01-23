//change inpute date '26/09/2020' to '2020-26-09'
var date = '26/09/2020'
var arr = []
function changeDate(dates){
    for(var i = 0; i < date.length; i++){
        if(dates.charAt(i) != '/'){
            arr.push(dates.charAt(i));
        }
    }
    var add1 = '';
    for (var j = 4; j < arr.length; j++){
        add1 += arr[j];
    }
    var add2 = arr[2] + arr[3];
    var add3 = arr[0] + arr[1];
    //var finalDate = add1 + add3 + add2;
    var finalDateModified = add1 + '-' + add3 + '-' + add2 
    return(finalDateModified);
}

console.log(changeDate(date));
