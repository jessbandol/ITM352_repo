//Lab12 part 6

let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));
let error = params.get('error');
    if (error) {
        alert(error);
    }

let productDetailsDiv = document.getElementById('productDetails');
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

let productListDiv = document.getElementById('productList');

for (let i in products) {
    productListDiv.innerHTML += `<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`;
}