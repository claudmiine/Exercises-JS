//Write a JavaScript program to create a
// new array taking the first and last elements from 
//a given array of integers and length must be greater or equal to 1.

function array(nums) {
    var array2 = [];
    array2.push(nums[0], nums[nums.length- 1]);

    return array2;
}
console.log(array([30,80,110]));
console.log(array([70,10,3,60,46,25]));