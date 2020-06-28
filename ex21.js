// Write a JavaScript program to concatenate two strings except their first character. 
/*
function concatenate(str1, str2) {
str1 = str1.substring(1, str1.length);
str2 = str2.substring(1, str2.length);
return str1 + " " + str2;
}
console.log(concatenate("DHello", "rRubber"))
*/
function joinUp (str1, str2) {
    let s1 = str1.slice(1, str1.length)
    let s2 = str2.slice(1, str2.length)
    let joinstr = s1 + " " + s2;
    return joinstr
    }
console.log(joinUp("JKoala", "PGrandma"))