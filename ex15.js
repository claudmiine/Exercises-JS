//Write a JavaScript program to check whether a given positive number
// is a multiple of 3 or a multiple of 7.
function check( x ) {
    return ( x % 3 == 0 || x % 7 == 0)
}
console.log(check(7));