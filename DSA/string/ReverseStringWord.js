// Question
//https://leetcode.com/problems/reverse-words-in-a-string/


 const reverseWord=(inp)=>{
    return inp.trim().split(' ').filter(str=>str!='').reverse().join(' ')
 }

 const inp="  the sky           is blue!  "
 const output=reverseWord(inp)
 console.log("Output: ", output)