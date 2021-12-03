const obj = {
    'key1': "Value 1",
    'key2': "Value 2",
    'key3': "Value 3"
};

// Illegal because of const -> Cannot create a new pointer
// obj = {
//   'new_key': "New value",  
// };

console.log(obj);

//Legal because WE CAN UPDATE the existing pointer.
//Sealing - Prevents changing of the object properties. (Addition or Deletion)
Object.seal(obj);

//For preventing from EDIT as well.
Object.freeze(obj);

obj.key1 = "New Value";
obj.new_key = "Another Value";
delete obj.key2;

console.log(obj);