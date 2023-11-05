//Lab12 part 6

window.onload = function() {
    let params = (new URL(document.location)).searchParams;
    let q = Number(params.get('quantity'));
    let error = params.get('error');
        if (error) {
            alert(error);
        }

    const form = document.getElementById('productForm');
    let formHTML = '';

    for (let i in products) {
        formHTML += `<h3>${products[i]["brand"]} at \$${products[i]["price"]} (${products[i]["total_sold"]} sold)</h3>`;

        formHTML += `<label for ="quantity_textbox_${i}">Quantity desired:</label>
        <input type ="text" id="quantity_textbox_${i}" name="quantity_textbox[${i}]" onkeyup="checkQuantityTextbox(this);">
        
        <span id = "quantity_textbox[${i}]_message">Enter a quantity</span><br>
        `;
    }
    formHTML += `<br> <input type="submit" value="Purchase">`;
    form.innerHTML=formHTML;
}

function checkQuantityTextbox(theTextbox) {
    let errs = validateQuantity(theTextbox.value, true);
    document.getElementById(theTextbox.name + '_message').innerHTML = errs;
}

function validateQuantity(quantity) {
    let errorMessage ="";

    switch (true) {
        case isNaN(quantity):
        errorMessage = "Not a number. Please enter a non-negative quantity to order.";
        break;

        case quantity < 0 && !Number.isInteger(quantity):
        errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
        break;

        case quantity < 0:
        errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
        break;

        case !Number.isInteger(quantity):
        errorMessage= "Not an Integer. Please enter a non-negatiive quantity to order.";
        break;

        default:
        errorMessage = "";
        break;
    }
    return errorMessage;
}