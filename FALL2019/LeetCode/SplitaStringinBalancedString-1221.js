


/*Balanced strings are those who 
have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it 
in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

 

Constraints:

    1 <= s.length <= 1000
    s[i] = 'L' or 'R'
*/

var balancedStringSplit = function(s) {
	// we are looking matching outputs 
	// can loop the the string 
	// possible set up a counter that count r and l 
	// which will see if it seen r or l yet
		let sum = 0; 
	 	let result = 0; 


	for(let i = 0; i < s.length; i++){
		// is to iterate throw the string
		// let keep track of r count 
		if (s[i] === "R"){
			sum++
		} 
		if(s[i] === "L"){
			sum--
		}
		if (sum === 0) result++
	}

	console.log(result)
    
};


	balancedStringSplit("RLLLLRRRLR")














