/*var fixedPoint = function(A) {

	let start = 0
	let end = A.length-1
	let mid;

	//console.log(end)
	//console.log(mid)
		
	while(start <= end){


		mid = Math.floor((start + end)/2)
		console.log(mid)
		break;
		if(mid === A[mid]){

		//	console.log("found")
		}

		else if(mid[A] < mid){

		}

	}
		console.log(-1)

}

console.log(Math.floor(fixedPoint.length/2))*/
/*
let fixedPoint =[-10,-5,5,6,7]


console.log(Math.floor(fixedPoint.length/2))*/


var fixedPoint = function(A) {
	let start = 0 
	let end = A.length-1
	let mid; 

	while (start <= end){

		mid = ((start + end)/2)

		if(mid === A[mid]){
			return A[]
		} else if (A[mid] < mid){
			start = mid + 1
		} else {
			end = mid - 1
		}

	}

		return false 

}

console.log(fixedPoint([0,1,1,2]))