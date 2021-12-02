//Callback
//When you pass a function as a parameter to another function,
//It is called as a callback.

// let fn = function() {
//     console.log("This is a function");
// }


// fn();


// function another_function(parameter) {
//     console.log(typeof parameter);
//     console.log("This is another function");
// }

// // let a = 'Stringgg';

// another_function(fn);

// function cooking(callback, another_callback) {
//     console.log('Cooking Started');
//     //Take time.
//     console.log('Cooking Finished');
//     callback();
//     another_callback();
// }


// let callback_fn = function() {
//     console.log('Bringing Food');
// }

// let callback_fn2 = function() {
//     console.log('Bringing Food for the sibling');
// }

// cooking(callback_fn, callback_fn2);


// let arr = ["String 1", "Element 2", "element 3", 1111];

// let cb = function(element) {
//     // console.log('Callback function');
//     console.log(element);
// }

// arr.forEach(cb);



//Cooking example again
function cooking(what_to_do_next) {
    console.log("Cooking Started");
    //Some time taking stuff
    console.log('Cooking finished');
    what_to_do_next();
}

let please_wake_me_up = function() {
    console.log('Get UP, food is ready');
}

cooking(please_wake_me_up);


