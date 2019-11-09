


/*657. Robot Return to Origin
Easy

There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

Example 1:

Input: "UD"
Output: true 
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

 

Example 2:

Input: "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.


*/

// Input: "LL"
//Output: false

//Input: "UD"
//Output: true 

/*

objective: return true if the move return to the same location
		else return false 

// iternatie through the input and check if it will move back to the same locaiton 
*/


var judgeCircle = function(moves) {

	//keep a count of the follow moves. if all = 0 then return true 

/*	LL, RR, UD, DU, RL, LR

    for(var i = 0; i < moves.length; i++ ){
    	if (moves[i] === "U" && moves[i+1] === "D" ){
    		return true 
    	} else if (moves[i] === "L" && moves[i+1] === "R" ){
    		return true
    	} else if (moves[i] === "D" && moves[i+1] === "U" ){
    		return true 
    	} else if (moves[i] === "R" && moves[i+1] === "L" ){
    		return true 
		} 

	}
	
		return false 
	
    
    
};
*/

var countL = 0
var countR = 0
var countU = 0
var countD = 0   



    for(var i = 0; i < moves.length; i++ ){
    	if (moves[i] === "L"){
    	countL++  
 	 	} else if (moves[i] === "R"){
 	 	countR++
 	 	} else if (moves[i] === "U"){
 	 	countU++
 	 	else if (moves[i] === "D"){
 	 	countD++
 	 	} 
	}

	if (countL === countR && countU === countD){
		return true
	} else {
		return false 
	}

console.log(judgeCircle("LL")) 




