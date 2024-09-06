// Question
// https://leetcode.com/problems/isomorphic-strings/description/

const isIsomorphic=(str1,str2)=>{
    if(str1.length!==str2.length) return false
    const map1={}
    const map2={}

    for(let i=0;i<str1.length;i++){
        const char1=str1[i]
        const char2=str2[i]

        if(map1[char1]==undefined){
            map1[char1]=char2
        }else if(map1[char1]!=char2) return false


        if(map2[char2]==undefined){
            map2[char2]=char1
        }else if(map2[char2]!=char1) return false
    }

    return true
}

const str1="egg"
const str2="add"
const output=isIsomorphic(str1,str2)
console.log("Output: ",output)