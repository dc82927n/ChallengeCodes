/*

1046. Last Stone Weight

We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose the two heaviest rocks
 and smash them together.  Suppose the stones have weights x and y
  with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, 
and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight
 of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the 
value of last stone.*/

/*
object take the largest num and if both are = then = 0 
if not equal return the difference for ex. 8 - 6 = 2 into the array. 
then continue conputing the heavest stone.


*/





var lastStoneWeight = function(stones) {

	let sortedNum = stones.sort(function(a,b){
		return b-a
	})

	let next  = sortedNum

	let value = []


for (let i = 0; i < sortedNum.length; i++){
	if (sortedNum[i] !== next[i+1] && sortedNum[i] > next[i+1] ) { 
		value.push(sortedNum[i] - next[i+1])
		console.log(value)
	}   

			8,7,4,2,1,1
}

// input num and output num of the last value
// sort the  num 
// compare num 
// if = return nothing
// if = > then push differnce back in 
// then return the last standing num. 
// if length != 1 continue 
	    
};

lastStoneWeight([2,7,4,1,8,1])







