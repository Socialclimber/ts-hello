// define a function and assign it to a variable
let log1 = function(message){
    console.log(message);
}

// alternatively, we can use tharrow function
let log2 = (message) => {
    console.log(message);
}

log2("Hi there");
// we can even make this function shorter
let doLog = (message) => console.log(message);