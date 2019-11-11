/*1207. Unique Number of Occurrences


Given an array of integers arr, write a function that 
returns true if and only if the number of occurrences of
 each value in the array is unique.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2
has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:

Input: arr = [1,2]
Output: false

Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/


var uniqueOccurrences = function(arr) {
    var map = new Map();
    for (var num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    var set = new Set();
    for (var count of map.values()) {
        if (set.has(count)) {
            return false;
        } else {
            set.add(count);
        }
    }
    
    return true;
};




