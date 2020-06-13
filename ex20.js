// Write a JavaScript program to find 
//the largest of three given integers.

function theLargest (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1 + " is the greatest!";
    }
    else if (num2 > num1 && num2 > num3) {
        return num2 + " is the greatest!";
    }
    else if (num3 > num1 && num3 > num2) {
        return num3 + " is the greatest!";
    }
    else if (num1 == num2 || num2 == num3 || num1 == num3) {
        return "Invalid. Please insert 3 DIFFERENT numbers."
    }
}

console.log(theLargest(5,10,5));
console.log(theLargest(4000,283894.8,-484));
console.log(theLargest(1,2, 3));
console.log(theLargest(9, 9 ,9));
console.log(theLargest(7,7,6))