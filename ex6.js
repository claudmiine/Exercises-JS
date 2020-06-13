/* passed a string and return in alphabetical order*/

function alpabethicalOrder(word) {
    word = word + "";
    return word.split("").sort().join("");

}
console.log(alpabethicalOrder("webmaster"));