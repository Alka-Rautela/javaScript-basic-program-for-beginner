/*
You will be using JavaScript to write a simple function that can accomplish a goal. 

We want to find the credit card number whose digits sum to the largest number. If more than one has the same largest sum of digits, we want the last one in the list with that sum.

Write a single function that takes one argument. That argument will be an array of credit card numbers. Assume the array can have any number of credit card numbers and each one is a string of digits and dashes. Your function should return the credit card number that has the largest sum of digits.

Here is a sample array of credit card numbers:
['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'] 

In the sample array above, the digits add up to 49, 81, 81, and 64 respectively. Since there are two which have the same sum, the function should return the last one with that sum, in this case '4252-278893-7978'

Start by thinking through your step-by-step process. Then, submit your best code. If your code isn't complete, that's OK; just let us know how far you were able to get. 
What do you need to do to solve this problem? Explain your thought process and how you will work through each part.
*/

var array1 = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];

var array3 = []
function creditCard(array2){
  for (var j = 0; j < array2.length; j++){
    var str = array2[j];
    var result = 0;

    for (var i = 0; i < str.length; i++ ){
      var res = str.charAt(i);
      if (res != '-'){
        result += parseInt(str.charAt(i), 10);
      }
    }
    array3.push(result);
  }
  //console.log(array3);
  var ind = array3.lastIndexOf(Math.max(...array3)); //finding the max of the array3 and then assigning it's index value to the variable ind
  return (array1[ind]);
}

console.log(creditCard(array1));