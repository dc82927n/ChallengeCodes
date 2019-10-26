




var defangIPaddr = function(address) {
    // objective is when we see . we replace it with [.]
    
    // create a condition that finds character of . 
    // return back a string
    let result = ""
    
    for (let i = 0; i < address.length; i++){
       if (address[i] === "."){
           result += "[.]" // 1
       } else {
           result += address[i]
       }
    }
    
    console.log(result)
    
    
};

defangIPaddr("1.1.1.1")