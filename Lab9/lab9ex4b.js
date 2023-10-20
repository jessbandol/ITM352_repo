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

function isValidNonNegativeInteger(q, returnErrors = false) {
    let errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return returnErrors ? errors : (errors.length == 0);
}

let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

for(let i = 0; i < pieces.length; i++) {
    let validation = isNonNegInt(pieces[i], true); 
    let outputMessage = Array.isArray(validation) 
                       ? `${pieces[i]}: Errors - ${validation.join(", ")}`
                       : `${pieces[i]} is a non-negative integer: ${validation}`;
    console.log(outputMessage);
}

/**
 * Checks if the given input is a valid non-negative integer.
 * 
 * @param {string} numString - The string value to be validated.
 * @param {boolean} [returnErrors=false] - Optional. If true, returns an array of validation errors, otherwise returns a boolean.
 * @returns {boolean|array} - Returns true if input is a valid non-negative integer, false or an array of errors otherwise.
 */
function isValidNonNegativeInteger(numString, returnErrors = false) {
    // ... function body ...
}

