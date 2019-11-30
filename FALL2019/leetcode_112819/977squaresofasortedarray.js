
/*
Given an array of integers A sorted in non-decreasing order, return an array of the 
squares of each number, also in sorted non-decreasing order.
 
Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]


*/


/*
objective we are taking in array of int and 
we will output the array of int square and sort them 
*/


/*
we can loop through each character number. squared them into a new array
then we can use sort method to sort them
*/


var sortedSquares = function(A) {
    
    let arrToBeSorted = []

    for (let i = 0; i < A.length; i++){
    	let aSquared = Math.pow(A[i], 2)
    	arrToBeSorted.push(aSquared); 
    }

    // now we need to to this array. 
    
    arrToBeSorted.sort(function(a, b){

    	return a - b
    })
    return arrToBeSorted
};


sortedSquares([-4,-1,0,3,10]) 








