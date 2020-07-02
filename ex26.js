//Write a JavaScript program to test whether an array of integers of length 2
// does not contain 1 or a 3. 

function find(nums){
    if (nums.includes(1) | nums.includes(3)) {
        return "Array constains 1 or 3."
    } else {
        return "Array does not constain 1 or 3."
    }
}
console.log(find([1, 34, 566, 4]));
console.log(find([4,57,2,89]));
console.log(find([33, 56, 11, 311]));