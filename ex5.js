/* Reverse a number */

function reverseNumber(num) {
    num = num + "";
    return num.split("").reverse().join("");

}
console.log(reverseNumber(7865));