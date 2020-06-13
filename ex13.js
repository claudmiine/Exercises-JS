//Write a JavaScript program to check whether
// a given integer is within 20 of 100 or 400. 
function checkNum (num1) {
    return (num1 == 20 || num1 == 100 || num1 == 400);
}

console.log(checkNum(60));
console.log(checkNum(20));
console.log(checkNum(400));