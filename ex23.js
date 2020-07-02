// Write a JavaScript program to find the types of a given angle.  
function angle(deg) {
    if (deg > 0 && deg < 90) {
        return "Acute angle.";
    } else if (deg === 90) {
        return "Right angle.";
    } else if (deg > 90 && deg < 180) {
       return "Obtuse angle.";
    } else if (deg === 180) {
        return "Straight angle";
    } else {
        return "Please insert a number between 0 and 180.";
    }
}
console.log(angle(180));