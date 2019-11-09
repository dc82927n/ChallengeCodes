/*Given a List of words, return the words that can be typed using 
letters of alphabet on only one row's of American keyboard like the image below.

American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.*/


var findWords = function(words){
	let row = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
	let arrayWords = []
		// going to use inlcude method to check if the a includes the string 
		// we can split row of strings to characters 
		// then we can check one letter at a time if the row character 
		// then we push the word into a new array. 


		arrayWords = row.split("")
		console.log(arrayWords)




}

findWords()












