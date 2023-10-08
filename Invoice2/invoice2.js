// Product Data
// Product 1
var item1 = 'Gillette Sensor 3 Razor';
var quantity1 = 2;
var price1 = 1.23;

// Product 2
var item2 = 'Barbasol Shaving Cream';
var quantity2 = 1;
var price2 = 2.64;

// Product 3
var item3 = 'Nautica Cologne';
var quantity3 = 1;
var price3 = 6.17;

// Product 4
var item4 = 'Rubbing Alcohol';
var quantity4 = 3;
var price4 = 0.98;

// Product 5
var item5 = 'Colgate Classic Toothbrush	';
var quantity5 = 12;
var price5 = 1.89;

// Compute extended prices (Add the products’ extended prices together to get an overall subtotal for the sale)
var extended_price1 = price1 * quantity1;
var extended_price2 = price2 * quantity2;
var extended_price3 = price3 * quantity3;
var extended_price4 = price4 * quantity4;
var extended_price5 = price5 * quantity5;
var subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;
var subtotalCell = document.getElementById("subtotal_cell");
subtotalCell.innerHTML = "$" + subtotal.toFixed(2);

// Calculate shipping based on sub-total
var shippingCharge = 0; // initializes to zero
if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05; // 5% of subtotal
}
var shippingCell = document.getElementById("shipping_cell");
shippingCell.innerHTML = "$" + shippingCharge.toFixed(2);

// Calculate sales tax
const TAX_RATE = 0.0575; // 5.75% expressed as a decimal
var salesTax = subtotal * TAX_RATE;
console.log("Sales Tax Amount: $" + salesTax.toFixed(2));
var taxCell = document.getElementById("tax_cell");
taxCell.innerHTML = "$" + salesTax.toFixed(2);

// Calculate grand total
var grandTotal = subtotal + salesTax +shippingCharge;
console.log("Grand Total: $" + grandTotal.toFixed(2));
var totalCell = document.getElementById("total_cell");
totalCell.innerHTML = "<b>$" + grandTotal.toFixed(2) + "</b>";

// item row 1
var invoiceTable = document.getElementById("invoiceTable").getElementsByTagName('tbody')[0];
var row = invoiceTable.insertRow();
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