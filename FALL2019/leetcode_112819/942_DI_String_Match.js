/*942. DI String Match
Easy

Share
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]
 

Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]*/




var diStringMatch = function(S) {
    // I means we got the char from N increase  
    // D means we got the chars from N decrease
    
    let l = S.length;
    let s = 0;
    const result = [];
    for (let i = 0; i <= S.length; ++i) {
        if (S[i] === 'I' ) { 
            result.push(s++);
        } else {
            result.push(l--); 
        }
    }
    console.log(result);
};


diStringMatch("IDID")






