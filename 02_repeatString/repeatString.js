const repeatString = function(string, num) {
    let result = ''
    
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let count = 0; count < num; count++) {
            result = result + string;
        }    
        return result;
    }

    
};



// Do not edit below this line
module.exports = repeatString;
