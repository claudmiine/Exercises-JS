//Write a JavaScript program to create a new string 
//from a given string with the first character of the given 
//string added at the front and back.

function create (str){
    const firstLetter = str.slice(0,1);
    const stringArray = str.split("");
    const firstLetterAddedToStr = stringArray.push(firstLetter);
    const lastLetterAddedToStr = stringArray.join("");
    const newStr =firstLetter + lastLetterAddedToStr;
    return newStr;
}

console.log(create("Mama"));



/*    OR     */

function create (str) {
    var x = str.charAt(0);
    return x + str + x;
}

console.log(create("Tata"));

//    OR    

function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));
