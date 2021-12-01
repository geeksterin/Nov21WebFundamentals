//Hoisting.

//Variable Declaration.

// var a = 10;

//1. Declaration var a;
//2. Definition a = 10;
//Declare a variable.
// var a;
//Define a variable with value "Aayush".
// var a = "Aayush";

// var abcd = 10;
// console.log(abcd);


//Variable (var) declarations are going to be moved at the top (of it's function or the global).

// console.log(a);

// var a = 10;
// console.log(a);

//👇🏻
// console.log(a);
// var a = 10;
// console.log(a);

// console.log(a);
// const a = 10;


// Create a variable;
// a = 10;
// console.log(a);

fn("ABCD");

function fn(param) {
    console.log(param);
}

fn("AAAA");

var arr = [1, 2, 3, 4];
console.log(arr[1000]);