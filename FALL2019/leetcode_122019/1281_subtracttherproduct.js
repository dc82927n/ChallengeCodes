/*Example 1:

Given an integer number n, return the
 difference between the product of its digits and the sum of its digits.

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21*/


/*
num input then take the digits to multiple total 
then sum total 
then take the product - with the total sum 

*/

var subtractProductAndSum = function(n) {
	let arrnum =  n.toString().split("")
	let product = 1
	let sum = 0 
	let result

	for(let i = 0; i < arrnum.length; i++){
		product *= arrnum[i]  
		sum += parseInt(arrnum[i])

	}

	console.log(result = product - sum) 

  
};

subtractProductAndSum(234)




