/*

1134. Armstrong Number

The k-digit number N is an Armstrong number
 if and only if the k-th power of each digit sums to N.

Given a positive integer N, return true if
 and only if it is an Armstrong number.

 

Example 1:

Input: 153
Output: true
Explanation: 
153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.

Example 2:

Input: 123
Output: false
Explanation: 
123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.
*/



/*
objective num is armstrong number return true else return false
	def arstrong num. is a number squared by the kth power and add 
	= the sum
	input is num
	output is boolean
	


*/

var isArmstrong = function(N) {

	// iterate each character in num
	// determine the k power 
	// sqare it  then take the sum . if = to the input then it's true


	let arrStr= N.toString().split("")
	let result = 0; 

	for (let i = 0; i < arrStr.length; i++){
	 	result  +=	parseInt(Math.pow(arrStr[i], arrStr.length)) // 1 ^ 3 , 5 ^ 3 , ect. 
	 	result // 153
	 	if (result === N){
	 		return true 
	 	}

	}
    
    	return false 



};



console.log(isArmstrong(153))
console.log(isArmstrong)