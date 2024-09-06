//Question
// https://leetcode.com/problems/longest-common-prefix/

// Brute Approch
const commonPrefix=(inp)=>{
    if(inp.length<2){
        return inp[0]
    }
  const common=(first,second)=>{
    let str=''
    let i=0
    while(first.length>i && second.length>i){
        if(first[i]==second[i]){
            str+=first[i]
            i++;
        }
        else{
            break
        }
    }
    return str
  }
  let firstCommon=common(inp[0],inp[1])
  if(firstCommon.length>0){
    for(let i=2;i<inp.length;i++){
        firstCommon=common(inp[i],firstCommon)
        if(!firstCommon.length){break}
    }
  }
  return firstCommon
}


// Optimise
const longestCommonPrefix = (strs) => {
    if (!strs.length) return '';  // Return empty string if input is empty
    if (strs.length === 1) return strs[0];  // Return the single string if there's only one

    let prefix = strs[0]; // Initialize the prefix as the first string

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        // Compare the current prefix with the next string character by character
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        // Update the prefix to the common substring
        prefix = prefix.slice(0, j);

        // If at any point the prefix becomes an empty string, return early
        if (!prefix.length) return '';
    }
    
    return prefix;
};

// Example usage



const input=["dog","racecar","car"]
const out=commonPrefix(input)
console.log("Output: ",out)

const out2=longestCommonPrefix(input)
console.log("Output: ",out2)