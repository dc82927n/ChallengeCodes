/*1021. Remove Outermost Parentheses
Easy

A valid parentheses string is either empty (""), "(" + A + ")", or A + B, 
where A and B are valid parentheses strings, and + represents string concatenation.  
For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist 
a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: 
S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in
 the primitive decomposition of S.

 

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

 

Note:

    S.length <= 10000
    S[i] is "(" or ")"
    S is a valid parentheses string*/


    // ( + 1 2 1 2 1 0 1 2 1 0
    // 1 0 1 0 
   // 0 1 0 1 


		var removeOuterParentheses = function(S) {
		/*	let result = ""
			let ticker = 0 

			for(let i = 0; i < S.length; i++){
				 console.log(S)
			}*/

			let result = "";
			let ticker = 0; 
/*
			for (el of S) {
				el == "(" ? ticker++ : 0 
				ticker > 1 ? result += el : 0 
				el == ")" ? ticker-- : 0 
			}*/

			/*for (el of S){*/

			for (let i = 0; i < S.length; i++){


				if (S[i] === "(") {
					ticker++ 
				} else {
					S[i] === 0
				}

				if (ticker > 1){
					result += S[i]
				} 

				if (S[i] == ")"){
					ticker--
				} 

			}

				return result

		};

		removeOuterParentheses("(())")






