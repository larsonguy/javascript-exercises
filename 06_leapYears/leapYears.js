const leapYears = function(year) {

// take year input
// if year % 4 == 0 enter nested if 
// nested if: if it is divisible by 400 and 100, return true

    if (year % 4 == 0) {
        if ((year % 100 == 0) && (year % 400 == 0)) {
            return true;
        } else if (year % 100 !== 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
