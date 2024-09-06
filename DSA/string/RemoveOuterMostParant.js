// Question
// "https://leetcode.com/problems/remove-outermost-parentheses/description/"

const removeOuterMostParantese=(inp)=>{
    let res=""
    let cnt=0
    if(inp.length<1) return res
    const temp=[]
    // temp.push(inp[0])
    for (const str of inp){
       if(str=='('){
        cnt+=1
        if(cnt>1){
            res+='('
        }
       }else {
        cnt-=1
        if(cnt>0){
            res+=')'
        }
       }
    }

   return res
}

const inp="(()())(())(()(()))"
const out=removeOuterMostParantese(inp)
console.log("Output: ",out)


