console.log('Hello 👋🏻');


// -> `this` keyword. (Context of Execution)
// var calculator1 = {
//     'num1': 0,
//     'num2': 0,
//     'mul': function () {
//         let product = this.num1 * this.num2;
//         return product;
//     },
//     'div': "",
//     'sum': "",
//     'diff': "",
//     'print': function() {
//         console.log(this); //Second Console
//     }
// };

// calculator1.num1 = 10;
// calculator1.num2 = 3;

// // var product = calculator.mul();
// // console.log(product);

// console.log(calculator1); //First Console
// calculator1.print();

// var obj1 = {
//     'key1': 19,
//     'fun': function() {
//         console.log(this);
//     }
// };

// var obj2 = {
//     'kayyyy': -1000,
//     'f': function() {
//         console.log(this);
//     }
// };

// obj1.fun();
// obj2.f();


// function fn() {
//     console.log(this);
// }

// fn();

// console.log(this);


var calculator = {
    'num1': 0,
    'num2': 0,
    'res': 0,
    'sum': function() {
        this.res = this.num1 + this.num2;
        return this.res;
    },
}