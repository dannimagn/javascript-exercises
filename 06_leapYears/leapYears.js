/*

If num % 4 = 0 then we have leap year

but if num % 100 = 0 then no leap year

but also if num % 400 = 0 then leap year

so the order to possibly check is:

if num % 100 = 0  return no leap

else if num % 4 && num % 400 = return leap

*/


const leapYears = function(num) {
    if (num % 4 == 0 && num % 100 == 0 && num % 400 == 0) {
        return true
    } else if (num % 4 == 0 && num % 100 != 0) {
        return true
    } else {
        return false
    }
}

leapYears(1984)

// Do not edit below this line
module.exports = leapYears;
