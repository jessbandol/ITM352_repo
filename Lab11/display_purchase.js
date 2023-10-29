let params = (new URL(document.location)).searchParams;

if (params.has("qty_textbox")) {
    let quantity = params.get("qty_textbox");
    
    if (isValidNonNegativeInteger(quantity)) {
        document.body.innerHTML = `Thank you for ordering ${quantity} things!`;
    } else {
        document.body.innerHTML = "Invalid quantity. Press the back button and try again.";
    }
} else {
    document.body.innerHTML = "Quantity not provided. Please go back and enter a valid quantity.";
}

function isValidNonNegativeInteger(q, returnErrors = false) {
    let errors = [];
    if (Number(q) != q) errors.push('Not a number!');
    if (q < 0) errors.push('Negative value!');
    if (parseInt(q) != q) errors.push('Not an integer!');
    
    return returnErrors ? errors : (errors.length == 0);
}
