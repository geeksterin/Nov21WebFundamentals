// console.log('File Linked');

//ES6 -> ECMAScript 6 -> 2015.
//let
//Arrow functions
//Destructuring
//Spread operators / Rest Operator (Maybe)
//Promises
//String Templating


//Let vs Var.
// var variable_name = "Variable Value";

// console.log(variable_name);

//var is global/functional scoped.
//let is local scoped.
//Example 1.
// var n = 10;
// if(n == 10) {
//     console.log('Do some complex stuff');
//     let secret = "THISISASECRET";
//     {
//         let super_secret = "THISISASUPERSECRET";
//     }
//     console.log(super_secret);
//     console.log('Some other complex Stuff');
// }

// console.log(secret);


//Example 2.
//Regarding reassignment.

// var a = "a";
// if(true) {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

// var a = 10;
// let a = 10;

// let a = "a";
// if(true) {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);


//Example 3.
//Inheritance of scope.
//In nesting of scopes, a variable (let) will be available for inner scopes but not outer scopes.
{
    let a = 10;
    {
        {
            console.log(a);
        }
    }
    console.log(a);
}

// console.log('Asjfkjhkdhjkdfhjgk');
