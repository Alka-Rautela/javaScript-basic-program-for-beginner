let getMyGrade = function(currentMarks, totalMarks){
    percantage = ((currentMarks * 100)/ totalMarks);
    //console.log(percantage);
    if (percantage >= 80){
        myGrade = "A";
    }
    else if (percantage >= 60 && percantage <80){
        myGrade = "B";
    }
    else if (percantage >= 50 && percantage <60){
        myGrade = "C";
    }
    else{
        myGrade = "F (fail)";
    }
    return (`Your grade is ${myGrade} and percantage is ${percantage}.`);
}

let yourResult = getMyGrade(30, 500);
console.log(yourResult);

