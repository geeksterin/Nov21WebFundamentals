console.log('👋🏻');

function a() {
    console.log('Function a is called');

    let b = function() {
        console.log('This is function B call');
    }

    let c = function() {
        console.log('This is function c');
    }

    let arr = [b, c];

    return arr;
}

let res = a();



// console.log(typeof res);

console.log(res);

res[0]();


// res();















//Function definition vs function invocation.

// let fn = function() {
//     console.log('This is fn called');
// }

// console.log(fn);



// fn();