//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumInt (num1, num2) {
    if (num1 == num2) {
        return (3 * (num1 + num2));
    } else {
        return (num1 + num2);
    }
}

console.log(sumInt(3, 2));