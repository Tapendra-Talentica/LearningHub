// Questions
// https://leetcode.com/problems/sort-characters-by-frequency/description/

const sortCharByFreq=(s)=>{
    const obj={}
    for(let char of s){
        obj[char]=(obj[char]||0)+1
    }
    const sortObj=Object.entries(obj).sort((a,b)=>b[1]-a[1])
    console.log(sortObj)
    let res=""
    for(let [key,value] of sortObj){
        res+=key.repeat(value)
    }
    return res
}

const s="tree"
const output=sortCharByFreq(s)
console.log("output: ",output)