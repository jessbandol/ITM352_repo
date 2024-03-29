//order 4.js
function formSubmission() {
    let quantity = Number(document.querySelector('input[name="qty_textbox"]').value);

    let validationMessage = validateQuantity(quantity);

    if (validationMessage!=="") {
        document.getElementById("invalidQuantity").innerHTML = validationMessage;
    } else {
        window.location.href = `display_purchase.html?qty_textbox=${quantity}`;
        //let message = `Thank you for ordering ${quantity} things!`;
        //document.body.innerHTML=message;
    } return false;
}

function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage= "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity <= 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negtive quantity to order.";
            break;
        case quantity <= 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negtive quanrity to order.";
            break;
        default:
            errorMessage = "";
            break;
    }
    return errorMessage;
}