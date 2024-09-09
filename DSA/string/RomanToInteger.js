// Question
// https://leetcode.com/problems/roman-to-integer/description/
const romanValue={
    'I':1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

const romanToInt=(roman)=>{
    let result=0
    for(let i=0;i<roman.length-1;i++){
        if(romanValue[roman[i+1]]>romanValue[roman[i]]){
            result-=romanValue[roman[i]]
        }else{
            result+=romanValue[roman[i]]
        }
    }
    result+=romanValue[roman[roman.length-1]]
    return result
}

const intToRoman=(intValue)=>{
    
}
const inp="LVIII"
console.log("Output :",romanToInt(inp))