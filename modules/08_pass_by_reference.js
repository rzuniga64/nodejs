/**
 *  Psss by reference
 *
 *  JavaScript passes objects to functions by reference
 */

function changeObj(obj) {
    obj.prop1 = function() {};
    obj.prop2 = {};
}

var myobj = {};
myobj.prop1 = {};
changeObj(myobj);
console.log(myobj);

// prop1 has been changed to a function and a new property, prop2, has been added.
// myobj and obj point to the same memory location

// { prop1: [Function], prop2: {} }