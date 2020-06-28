// Write a JavaScript program to test whether a string end with "Script". 
//The string length must be greater or equal to 6

function checkIfScript(str) {
    if (str.substring(str.length - 6, str.length) == 'Script')  {
        return true;
    } else {
        return false;
    }
} 

console.log(checkIfScript("JavaScript"));
console.log(checkIfScript("Python"));

//SECOND SOLUTION

function checkEnd(str){
    if (str.length < 6 ){
        return "String is too short."
    } else {
        str.slice(str.length -6 === "Script")
        return str
    }
}
console.log(checkEnd("Java"));
console.log(checkEnd("Java Script"));