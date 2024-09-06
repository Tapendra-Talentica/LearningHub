// Question
// https://leetcode.com/problems/rotate-string/description/

const rotateString=(str,goal)=>{
    if(str.length!==goal.length) return false

    let newStr=str+str
    return newStr.includes(goal)
}


const str="abcde"
const goal="cdeab"
const result=rotateString(str,goal)
console.log("Output: ",result)
