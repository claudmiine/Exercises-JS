//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string
function addPy (str) {
    const py = "Py";
    if (str.length < 2) {
        return false;
    } 
    else if (str.substring(0,2) == "Py") {
        return str;
    }
    else {
        return py + str;
    } 
}

console.log(addPy("Python"));
console.log(addPy("Java"));
console.log(addPy("T"));
