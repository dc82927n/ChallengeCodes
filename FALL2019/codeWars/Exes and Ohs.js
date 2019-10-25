/*Check to see if a string has the same amount of 'x's and 'o's.
 The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/



function XO(str) {
    //check if contains a even number of x and o if not it return false
    // i would loop through each character to see if x is even and then o is even. 
    // if it does then it return true other wise it return false
    let x = 0
    let o = 0 
    

    for (let i = 0; i < str.length; i++){
    	if(str[i] === "x") {
    		x++ 
    		console.log(x)
    	}  else if(str[i] === "o"){
    		o++
    		console.log(o)
    	} 
    }
    	
      	if ((x % 2 === 0) && (o % 2 === 0)){
        console.log(true)
        } else {
    	console.log(false)
    	}

    	
    
}


XO("")



/*
any difference with the results

function XO(str){
  same = str.toLowerCase()
  var x = 0
  var o = 0
  for (var i=0; i<same.length; i++){
    if(same[i] === 'x'){
      x ++
    } else if(same[i] === 'o'){
      o ++
    } 
  }
  return x === o
}

XO('zzoo')

*/





/*XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/







// 
/*


function XO(str) {
		//  if both x and o are even = true
		// i'm going loop over the string and every time it see the character x or 
		// o i'm going keep an count and check if even or odd. if so print true
		// additionally if empty it's false. 


		let x = 0; 
		let o = 0; 

		for (let i = 0; i < str.length; i++){ // looping over the string
			if (str[i] === "x"){
				x++
			} else if (str[i] === "o"){
				o++
			}

			if(x % 2 === 0 )


		}	
}

function XO ("xo")





*/














