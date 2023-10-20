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
    if(Number(q) != q) errors.push('Not a number!'); 
    if(q < 0) errors.push('Negative value!'); 
    if(parseInt(q) != q) errors.push('Not an integer!'); 

    return returnErrors ? errors : (errors.length == 0);
}

let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

pieces.forEach((item, index) => {
    console.log(`part ${index} is ${(isValidNonNegativeInteger(item) ? 'a' : 'not a')} quantity`);
});


function checkIt(item, index) {
    console.log(`part ${index} is ${(isValidNonNegativeInteger(item) ? 'a' : 'not a')} quantity`);
}

pieces.forEach(checkIt);

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        callback(picture_data);
    }, 3 * 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
download(url, process);
