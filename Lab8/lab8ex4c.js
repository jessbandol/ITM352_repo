//define the product_quantities array
let product_quantities = [2,1,1,1,1];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

//iterate thorugh product_quantities and print each element in a table
document.write("<table>");
//document.write("<tr><th>Product #</th><th>Quantity</th></tr>"); 

//lab8 part 3.2
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");

for (let i=0; i < product_quantities.length; i++) {
   
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i+1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
    `;
    document.querySelector('table').appendChild(newRow);

    newRow.addEventListener('mouseover', function(){
        newRow.style.backgroundColor = 'yellow';
    });

    newRow.addEventListener('mouseout', function(){
        newRow.style.backgroundColor = '';
    });

    newRow.addEventListener('click', function(){
       document.querySelector('table').deleteRow(newRow.rowIndex);
    });
}

let addButton = document.createElement('button');

addButton.textContent = 'Add New Row';

addButton.addEventListener('click', addNewRow);

document.body.appendChild(addButton);

//lab 8 4.1
function addNewRow () {
    let table = document.querySelector('table');
    
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
    `;
    newRow.addEventListener('mouseover', function(){
        newRow.style.backgroundColor = 'yellow';
    });

    newRow.addEventListener('mouseout', function(){
        newRow.style.backgroundColor = '';
    });

    newRow.addEventListener('click', function(){
        table.deleteRow(newRow.rowIndex);
    });
};

/*
function deleteClickedRow () {
    let table = document.querySelector('table');
    let rowCount = table.rows.length; //gives row count

    if (rowCount >1) {
        table.deleteRow(rowCount-1); //delete last row
    };
};
*/