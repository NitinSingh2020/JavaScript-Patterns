/* Length Property does not return the number of elements in the array, length
 * property contains a number which is highest integer subscript in array + 1
 * ======================================================================== */

var a = []; // or var a = new Array();
a[4] = 4;
a[1001] = "pop";

console.log(a.length); // prints 1002

/* Appending to an array
 * ================== */
var a2 = ["John Smith", "Jimmy Dean", "Meg Ryan"];
a2.push("Iron Man", "Jackie Chan");
// Adds two elements to a2 and returns the current length

/* Deleting from an array
 * splice(index to start deleting from, numbers of elements to delete)
 * ================================================================ */
var a2 = ["John Smith", "Jimmy Dean", "Meg Ryan", "Spider Man"];
a2.splice(1, 2); // This deletes "Jimmy Dean" and "Meg Ryan", a2.length == 2


/* Inserting to an array
 * splice(index to start, numbers of elements   
 * to delete, list of new elements to insert)
 * ======================================= */
var a2 = ["John Smith", "Jimmy Dean", "Meg Ryan", "Spider Man"];
a2.splice(1, 2, "Iron Man", "Hulk", "Jackie Chan");