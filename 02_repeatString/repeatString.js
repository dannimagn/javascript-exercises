
const repeatString = function(string, num) {
    let result = []
    if (num < 0) {
        return 'ERROR'
    } else {
    for (let start = 0; start < num; start++) {
        result.push(string)

    }
    return result.join('')
}
};


repeatString("hey", 10)

// Do not edit below this line
module.exports = repeatString;
