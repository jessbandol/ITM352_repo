function updateSpan(value) {
    let messageSpan = document.getElementById('qty_textbox_message');

    if (isValidPositiveInteger(value)) {
        messageSpan.innerHTML = value;
    } else {
        messageSpan.innerHTML = "Invalid input. Please enter a positive integer.";
    }
}

function isValidPositiveInteger(num) {
    let n = Number(num);
    return n === parseInt(n, 10) && n > 0;
}
