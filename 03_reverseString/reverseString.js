const reverseString = function(string) {
    
    // take the string and pop out the first letter
    // append that letter to the end of the newString
    //  
    
    let strLength = string.length;
    let newString = ''
    for (let i = 0; i <= strLength; i++ ) {
        let strIndex = string.charAt(strLength - i);
        newString = newString + strIndex;
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
