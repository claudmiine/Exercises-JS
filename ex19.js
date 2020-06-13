//Write a JavaScript program to remove a character at the specified
// position of a given string and return the new string. 

var str = "Elon nie lubi eukaliptusy." //  ===> Elon lubi eukaliptusy ✅
var newStr = str.split(" ", );
var lastStr = newStr.splice(1,1);
console.log(newStr.join(" "));