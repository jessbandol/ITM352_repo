/*const attributes = "<name>;<age>;<major>";
const parts = attributes.split(";"); 

console.log(parts);
*/

/*let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

for(let i = 0; i < pieces.length; i++) {
    console.log(`Part: ${pieces[i]}, Data Type: ${typeof pieces[i]}`);
}

console.log(typeof pieces);

let invertedString = pieces.join(",");
*/

function isNonNegInt(q) {
    let errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    
    return errors.length == 0; // Return true if no errors, otherwise false
}

let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

for(let i = 0; i < pieces.length; i++) {
    console.log(pieces[i], "is non-negative integer?", isNonNegInt(pieces[i]));
}