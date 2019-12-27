var isPalindrome = function(s) {
		let test = s.split(" ").reverse().join("")
    	console.log(test)
    for (let i = 0; i < s.length; i++){
        if (s === test){
            return true
        } else {
            return false 
        }
    }
    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))