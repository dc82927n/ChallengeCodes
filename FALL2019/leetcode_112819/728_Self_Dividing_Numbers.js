/*
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible 
self dividing number, including the bounds if possible.
Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]*/



/*
objective it takes all the number that are divisible the upper bound number by the lower bound. 
takes in a number and output an array.
additionally the number 0 are taken away from the array

*/

var selfDividingNumbers = function(left, right) {
  	let a = left % 10 
    let b = right % 10	
    console.log(a, b)
    

};



selfDividingNumbers(3,7)







