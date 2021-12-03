let obj1 = {
    'key1': "Value 1",
    'key2': "Value 2",
    'key3': "Value 3",
};


//Shallow copy
let obj2 = obj1;

// console.log(obj2);
// console.log(obj1);

obj2.key1 = "Another value1";
obj2.new_key = "New Value";

console.log(obj1);

//Deep Copy
obj2 = JSON.parse(JSON.stringify(obj1));