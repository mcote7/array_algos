// Given var arr = [8,6,7,5,3,0,9] reverse the array and print the result
// Predicted output: [9,0,3,5,7,6,8]
// When you have solved this, create new values for your array and ensure it still works as expected.

// YOUR CODE HERE node 3_reverse.js
           // length=7
var arr = [8,-6,7,5,-3,0,9];
var arrnew = [];                    // arrnew[9,0,-3,5,7,-6,8]!!!!!

for(i=arr.length-1; i >= 0 ;i--){     // i = 6 - 5 - 4 - 3 - 2 - 1 - 0 - -1 Break
    arrnew.push(arr[i]);

}
console.log(arrnew);


