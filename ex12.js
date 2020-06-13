//Write a JavaScript program to check two given numbers and return 
//true if one of the number is 50 or if their sum is 50. 

function checkIf50 (num1, num2) {
    var sum = num1 + num2;
    if (num1 === 50 || num2 === 50 || sum === 50) {
        return true
    } else {
        return "Num 1 and num2 are not equal to 50. Try again!"
    }
}

console.log(checkIf50 (4,50));
console.log(checkIf50(25,25));
console.log(checkIf50(50,9));


/*    OR 
function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
*/