/* First letter of string  to upperCase*/

function upperCase(str) {
    var str = str.split(" ");
    var newStr = [];

    for (var x = 0; x < str.length; x++) {
        newStr.push(str[x].charAt(0).toUpperCase() + str[x].slice(1));
    }
    return newStr.join(" ");
}
console.log(upperCase("adam klaudia to najlepsza para na swiecie!!!!!!"));