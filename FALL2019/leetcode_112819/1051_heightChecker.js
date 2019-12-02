/*

Students are asked to stand in non-decreasing order of heights for an annual photo.
Return the minimum number of students not standing in 
the right positions.  (This is the number of students that must move in 
	order for all students to be standing in non-decreasing order of height.)
 
Example 1:
Input: [1,1,4,2,1,3]
Output: 3
Explanation: 
Students with heights 4, 3 and the last 1 are not standing in the right positions.
 
Note:
	1. 1 <= heights.length <= 100
	2. 1 <= heights[i] <= 100


*/

/*
objective: 
going to check if how many are of place and return the value
going to take an array of int and return num value
*/

/*
	loop through the input 
	[1,3,2]

	then compare 

	[1,2,3]

	how many are different. 
	keep count 

*/


const heightChecker = function(heights) {
	const origin = [...heights]
	heights.sort(function(a, b){
		return a-b
	})

	let count = 0; 

		for(let i = 0; i < origin.length; ++i){
			if (heights[i] !== origin[i]){
				count++
			}	

	}
	return count
};

/*var heightChecker = heights => {
  var origin = [...heights];
  heights.sort((a, b) => a - b);
  let ret = 0;
  for (let i = 0; i < origin.length; ++i) {
    origin[i] !== heights[i] && ++ret;
  }
 	return ret;
};*/

heightChecker([1,5,3,4,2])

