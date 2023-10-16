// Product Data
// Product 1
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = 2;
let price1 = 1.23;

// Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = 1;
let price2 = 2.64;

// Product 3
let item3 = 'Nautica Cologne';
let quantity3 = 1;
let price3 = 6.17;

// Product 4
let item4 = 'Rubbing Alcohol';
let quantity4 = 3;
let price4 = 0.98;

// Product 5
let item5 = 'Colgate Classic Toothbrush	';
let quantity5 = 12;
let price5 = 1.89;

// Compute extended prices (Add the products’ extended prices together to get an overall subtotal for the sale)
let extended_price1 = price1 * quantity1;
let extended_price2 = price2 * quantity2;
let extended_price3 = price3 * quantity3;
let extended_price4 = price4 * quantity4;
let extended_price5 = price5 * quantity5;
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;
let subtotalCell = document.getElementById("subtotal_cell");
subtotalCell.innerHTML = "$" + subtotal.toFixed(2);

// Calculate shipping based on sub-total
let shippingCharge = 0; // initializes to zero
if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05; // 5% of subtotal
}
let shippingCell = document.getElementById("shipping_cell");
shippingCell.innerHTML = "$" + shippingCharge.toFixed(2);

// Calculate sales tax
const TAX_RATE = 0.0575; // 5.75% expressed as a decimal
let salesTax = subtotal * TAX_RATE;
console.log("Sales Tax Amount: $" + salesTax.toFixed(2));
let taxCell = document.getElementById("tax_cell");
taxCell.innerHTML = "$" + salesTax.toFixed(2);

// Calculate grand total
let grandTotal = subtotal + salesTax +shippingCharge;
console.log("Grand Total: $" + grandTotal.toFixed(2));
let totalCell = document.getElementById("total_cell");
totalCell.innerHTML = "<b>$" + grandTotal.toFixed(2) + "</b>";

// item row 1
let invoiceTable = document.getElementById("invoiceTable").getElementsByTagName('tbody')[0];
let row = invoiceTable.insertRow();
row.insertCell().innerHTML = item1; 
row.insertCell().innerHTML = quantity1;
row.insertCell().innerHTML = `$${price1.toFixed(2)}`;
row.insertCell().innerHTML = `$${extended_price1.toFixed(2)}`;

// item row 2
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item2; 
row.insertCell().innerHTML = quantity2;
row.insertCell().innerHTML = `$${price2.toFixed(2)}`;
row.insertCell().innerHTML = `$${extended_price2.toFixed(2)}`;

// item row 3
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item3; 
row.insertCell().innerHTML = quantity3;
row.insertCell().innerHTML = `$${price3.toFixed(2)}`;
row.insertCell().innerHTML = `$${extended_price3.toFixed(2)}`;

// item row 4
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item4; 
row.insertCell().innerHTML = quantity4;
row.insertCell().innerHTML = `$${price4.toFixed(2)}`;
row.insertCell().innerHTML = `$${extended_price4.toFixed(2)}`;

// item row 5
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item5; 
row.insertCell().innerHTML = quantity5;
row.insertCell().innerHTML = `$${price5.toFixed(2)}`;
row.insertCell().innerHTML = `$${extended_price5.toFixed(2)}`;