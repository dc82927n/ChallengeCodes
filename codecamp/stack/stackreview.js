


var Stack = function() {
	this.count = 0; 
	this.storage = {}; 



//add a value onto the end of the stack 

this.push = function (value){
	this.storage[this.count] = value
	this.count++; 

}

// removes and return the value at the end 

	this.pop = function () {
		if (this.count === 0) {
			return undefined; 
		}

		this.count--; 
		var result = this.storage[this.count]
		delete this.storage[this.count];
		return result
	}

	this.size = function (){
		return this.count
	}

	this.peek = function(value){
		return this.storage [this.count-1]; 

	}
}

var myStack = new Stack() 

/*
myStack.push(1)
myStack.push(2)
console.log("this is first " + myStack.peek())
console.log("this is second " + myStack.pop())
console.log("this is third " + myStack.peek())*/
myStack.push("freeCodeCamp")
console.log(myStack.size())
console.log("this is first " + myStack.peek())
console.log("this is second " + myStack.pop())
console.log("this is third " + myStack.peek())













