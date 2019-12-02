/*Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u'
 from it, and return the new string.



Example 1:
Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:
Input: "aeiou"
Output: ""
*/



var removeVowels = function(S) {

	res = S.replace(/a|e|i|o|u/g, "")
	return res
    
};



removeVowels("leetcodeisacommunityforcoders")





