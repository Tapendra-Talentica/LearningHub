// Question
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
const maxDepth = function(s) {
    let maxDepth=0
    let tempDepth=0
    for(const char of s){
        if(char === '('){
            tempDepth+=1
            maxDepth=tempDepth>maxDepth?tempDepth:maxDepth
        }else if(char===')'){
            tempDepth-=1
        }
    }
    return maxDepth
};

const inp="(1+(2*3)+((8)/4))+1"
console.log("Output: ",maxDepth(inp))