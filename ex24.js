//Create a new string of specified copies of a given string

function repeat (str, n) {
    if (n < 0) {
        return false;
    } else if (n > 0) {
        return str.repeat(n);
    }
}
console.log(repeat("Kocham Adama  ", 10));
