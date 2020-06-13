// Write a JavaScript program to check from two given integers, 
//whether one is positive and another one is negative.
function check (num1, num2) {
    return ( num1 > 0 && num2 < 0 || num1 < 0 && num2 > 0)
}

console.log(check(7, -9));
console.log(check(7, 88));