/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphaNumeric = (char) => {
    return /^[a-zA-Z0-9]+$/.test(char);
};

var isPalindrome = function(s) {
    let newS = '';
    
    for (let char of s) {
        if (isAlphaNumeric(char)) {
            // Convert all alphabetic characters to lowercase
            newS += char.toLowerCase();
        }
    }
    
    // Check if the processed string is the same forwards and backwards
    return newS === newS.split('').reverse().join('');
};
