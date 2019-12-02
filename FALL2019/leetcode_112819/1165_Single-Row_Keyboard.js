/*



There is a special keyboard with all keys in a single row.
Given a string keyboard of length 26 indicating the layout of the 
keyboard (indexed from 0 to 25), initially your finger is at index 0. 
To type a character, you have to move your finger to the index of the desired
 character. The time taken to move your finger from index i to index j is |i - j|.
You want to type a string word. Write a function to calculate how much time it takes 
to type it with one finger.
 
Example 1:
Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' 
then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
Example 2:
Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73
 

*/


/*	var calculateTime = function(keyboard, word) {
	    
	};*/


/*
const getMap = (keyboard) => {
  const map = {}
for (let i = 0; i < keyboard.length; i++) {
    const char = keyboard[i]
    console.log(char)
    map[char] = i
  }
console.log(map)
}

getMap("abcdefghijklmnopqrstuvwxyz")
*/


/*var calculateTime = function(keyboard, word) {
    let timeToType = 0;
    let prevLetter = 0;
    
   // for(let letter of word) {
   	for (let i = 0; i < word.length; i++){
        let currentLetter =  keyboard.indexOf(word[i]);
        console.log(currentLetter)
        timeToType += Math.abs(prevLetter - currentLetter);
        prevLetter = currentLetter;
    }
    console.log(timeToType);
};

calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")
*/

/*
var calculateTime = function(keyboard, word) {
    let timeToType = 0;
    let prevLetter = 0;
    
    for(let letter of word) {
        let currentLetter =  keyboard.indexOf(letter);
        timeToType += Math.abs(prevLetter - currentLetter);
        prevLetter = currentLetter;
    }
    return timeToType;
};
*/




var calculateTime = function(keyboard, word) {
	let currentPosition;
	let prevLetter = 0; 		  
	let count = 0

	for(let i = 0; i < word.length; i++){
		currentPosition = keyboard.indexOf(word[i]) // 2 , 5 ,0 
		//console.log(currentPosition)
		count += Math.abs((prevLetter - currentPosition))
		//console.log(prevLetter)
		console.log(currentPosition)
		prevLetter = currentPosition 
	}

	console.log(count) 

}

calculateTime("abcdefghijklmnopqrstuvwxyz", word = "cea")