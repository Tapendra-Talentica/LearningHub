// Questions
//https://leetcode.com/problems/valid-anagram/description/


const validAnagram=(s,t)=>{
    if(s.length!=t.length) return false
    const obj={}

    for(let i=0;i<s.length;i++){
        if(obj[s[i]]!=undefined||obj[s[i]]!=null){
            obj[s[i]]+=1
        }else{
            obj[s[i]]=1
        }

        if(obj[t[i]]!=undefined||obj[t[i]]!=null){
            obj[t[i]]-=1
        }else{
            obj[t[i]]=-1
        }

    }
    for(let [key,value] of Object.entries(obj)){
        if(value!=0){
            return false
        }
    }
    return true

}

const s="anagram"
const t="nagaram"
const output=validAnagram(s,t)
console.log(output)