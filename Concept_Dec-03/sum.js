console.log('👋🏻')


// sum(10, 20);
// sum(10)(20); //Invocation should look like this.


let sum = function(param1) {


    let b = function(param2) {
        let add = param1 + param2;
        console.log(add);
    }
    return b;
}

// let res = a();
// res();

sum(10)(20);