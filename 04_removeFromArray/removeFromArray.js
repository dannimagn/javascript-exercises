/* 
I need to be able to remove multiple values from the array

I already remove a variable from the array with the indexOf method

*/


const removeFromArray = function(myArray, num) {
    const index = myArray.indexOf(num);    
    console.log(index)
};


removeFromArray([1, 2, 3, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
