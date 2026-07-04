
// shallow copy
// The spread operator (...) creates a shallow copy. It copies only the first level of an object or array.

let obj1 = {
    name: "sai",
    address: {
        city: "hyd",
        state: "ap"
    }
}

// let obj2 = { ...obj1 };

let obj2 = Object.assign(obj1);

obj2.name = "ram"
obj2.address.city = "viz"

// console.log(obj1);
// console.log(obj2);

// console.log(obj1 === obj2);
// console.log(obj1.address === obj2.address);

// deep copy

// A deep copy creates a completely new copy of the object, including all nested objects and arrays. Nothing is shared.

let obj3 = structuredClone(obj1);

obj3.address.city = "gtr";

// console.log(obj1);
// console.log(obj3);

const copy = JSON.parse(JSON.stringify(obj1));

console.log(copy);


// Shallow Copy: Creates a new object, but nested objects/arrays are copied by reference.
// Deep Copy: Creates a completely independent copy, including all nested objects and arrays.