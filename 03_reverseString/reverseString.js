/*
I enter a string
The script takes the length of that string
The loop starts at the last indexed number of the string
The loop then adds the last indexed string to an empty array
This loops until index number reaches 0
The end then returns the new variable
*/



const reverseString = function(string) {
    let newString = ['']

    for (let strLength = string.length; strLength > -1; strLength--) {
        newString.push(string[strLength])
    }
    return newString.join('')
};

reverseString('hello')


// Do not edit below this line
module.exports = reverseString;
3