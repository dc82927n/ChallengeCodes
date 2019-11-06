/*1119. Remove Vowels from a String
Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u'
 from it, and return the new string.

Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""
Note:

S consists of lowercase English letters only.

1 <= S.length <= 1000*/


	// take a string and remove the vowels of the string. 
	// create of vowels. split into strings of arrays
	// string method like include() or indexOf() to filter out the vowels

function disemvowel(str) {

	//ex. word

	let strVowel = "aeiou"
	let arr = []
	let result = ""
	console.log( arrayVowel =  strVowel.split(""))
/*
	for (let i = 0; i < str.length; i++){
		if(str[i] !== arrayVowel){ // w 
			arr.push(str[i])
		} */
		
		for ( el in strVowel){
			if (el !== str)
		 	result += str
		
		}
	
		console.log(result)

	

	}

disemvowel("word");