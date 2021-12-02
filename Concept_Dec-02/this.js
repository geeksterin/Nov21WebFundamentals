
//Default behaviour
// var obj = {
//     'fn': function() {
//         console.log(this);
//     },
//     'key': 'Value 1234',
// };

// obj.fn();

//When the function is not in an object (Global object -> window)
// function fn() {
//     console.log(this);
// }

// fn();

//call, apply, bind

//call

// function fn() {
//     console.log(this);
// }

// fn();
// var obj = {
//     'key1': "Value something",
//     'key2': "Value of another thig",
// };
// fn.call(obj);

// var obj = {
//     'fn': function() {
//         console.log(this);
//     },
//     'key1': "Something",
// }

// var obj2 = {
//     'key3': 1000,
//     'key4': "Special",
// };

// obj.fn();
// obj.fn.call(obj2);




// obj.fn();

// var set1 = {
//     'num1': 10,
//     'num2': 40,
// };

// var set2 = {
//     'num1': 15,
//     'num2': 10,
// };

// sum.call(set1);
// sum.call(set2);
// sum();




//call with parameters
// function fn(a, b) {
//     console.log(a);
//     console.log(b);
//     console.log(this);
// }

// let array_of_params = [10, 'Strrrrrrrrrrrrring'];

// let obj = {
//     'key1': 'Something',
//     'anything': 'dfgfdgfghdghf',
// };

//apply

// array_of_params.push()

// fn.call(obj, 10, 'Strrrrrr');
// fn.apply(obj, array_of_params);
//The function is executed.



//Bind

function fn(a, b) {
    console.log(a);
    console.log(b);
    console.log(this);
}

let obj = {
    'key1': 'Something',
    'anything': 'dfgfdgfghdghf',
};

let new_fn = fn.bind(obj);
//The function is NOT EXECUTED!
//Bind only creates a function copy and refers the context object.
//Bind will return the newly created function reference.
//That you will call manually later.

console.log(typeof new_fn);


//Some complex and long code.
new_fn(10, 'Strrrrrrrrr');


//Assignment

let calc = {
    'mul': function() {

    },
    'sub': function() {

    }
};
//A single code

let set1 = {
    'num1': 10,
    'num2': 20,
}
//Atleast 3 or 4 sets

//Demonstrate some mathematical operation on all of these sets separately.
//You have to use call, apply and bind.

let arr = [10, 20, 40];

var sum = 0;
let cb = function(e) {
    sum = sum + e;
}
arr.forEach(cb);
console.log(sum);