//Closure:
// Combination of many functions combined in another function.
// Nesting of functions.

function a() {
    console.log('Function a is called');

    function b() {
        console.log('Function b is called');
        function child_of_b() {
            console.log('Function child of b called');
        }

        child_of_b();
    }

    // child_of_b();

    function b_special() {
        console.log('Function b special is called');
    }

    b();
    b_special();
}

// a.b();
a();
// b();


//Assignment:
// Create a sum function which is called like this 
// let result = sum(10)(30); ✔
// Hint: You can return a function.
// Hint: This will be done with the help of closure.
//  sum(a, b); ❌


// function fn() {
//     function child() {
//         console.log('Child function')
//     }
//     return child;
// }

// var a = fn();
// a();
// console.log(typeof a);

// Write a chaining function to make sum.
// let cb = function() {
//     let b = 20;
//     console.log(a + b);
// }
// sum(10, cb);