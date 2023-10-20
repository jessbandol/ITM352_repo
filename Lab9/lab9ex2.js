/*const attributes = "<name>;<age>;<major>";
const parts = attributes.split(";"); 

console.log(parts);
*/

let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

for(let i = 0; i < pieces.length; i++) {
    console.log(`Part: ${pieces[i]}, Data Type: ${typeof pieces[i]}`);
}

console.log(typeof pieces);

let invertedString = pieces.join(",");

