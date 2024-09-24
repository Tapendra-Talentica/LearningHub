// https://leetcode.com/problems/word-pattern/description/?envType=problem-list-v2&envId=string&difficulty=EASY
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const newS = s.split(' ').filter(word => word.length > 0); // To handle extra spaces
    if (pattern.length !== newS.length) return false;
    // We are usinf map here insted of object because constructor is in inbuild properties of object ,which create and issue
    const map1 = new Map(); // Pattern to word mapping
    const map2 = new Map(); // Word to pattern mapping

    for (let i = 0; i < pattern.length; i++) {
        const pChar = pattern[i];
        const word = newS[i];

        // Check if the pattern-to-word mapping is consistent
        if (map1.has(pChar) && map1.get(pChar) !== word) {
            return false;
        }
        // Check if the word-to-pattern mapping is consistent
        if (map2.has(word) && map2.get(word) !== pChar) {
            return false;
        }

        // Create the mappings if they don't exist
        map1.set(pChar, word);
        map2.set(word, pChar);
    }

    return true;
};

wordPattern("abba","dog constructor constructor dog")

