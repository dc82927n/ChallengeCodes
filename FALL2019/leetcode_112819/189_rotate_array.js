

/*Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there
 are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/


/*
	objective will take an num input of k and shift those space to the front of the array
*/

/*
	initial thought is to pop off the k amount and then push back to original array. 

*/


var rotate = function(nums, k) {

	var value; 

	for(let i = 0; i < k; i++){

		value = nums.pop()
		nums.unshift(value)
	}

	console.log(nums)


};


rotate([1,2,3,4,5,6,7], 3) 












