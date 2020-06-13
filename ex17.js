//Check whether a string starts with 
//'Java' and false otherwise

function checkIfJava (str) {
    if (str.length < 4 ) {
        return false;
    } 
    front = str.substring(0,4)
    if (front == "Java") {
        return true
    }
    else {
        return false
    }
    }
    console.log(checkIfJava("JavaScript"));
    console.log(checkIfJava("Python"));