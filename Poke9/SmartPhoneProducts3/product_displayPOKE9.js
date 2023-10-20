//declare store name
const first_name="Jessica";
const last_name ="Bandol's";
const store_name ="Bandol";

const top_title = document.getElementById('top_title');
top_title.innerHTML = (store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
//let wins; 
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//POKE 9 Convert the product variables into product information objects
const product1 = {
    brand: "HTC",
    price: 40.00,
    image: "Images/HTC.jpg"
};

const product2 = {
    brand: "Apple",
    price: 75.00,
    image: "Images/iphone-3gs.jpg"
};

const product3 = {
    brand: "Nokia",
    price: 35.00,
    image: "Images/Nokia.jpg"
};

const product4 = {
    brand: "Samsung",
    price: 45.00,
    image: "Images/Samsung.jpg"
};

const product5 = {
    brand: "Blackberry",
    price: 10.00,
    image: "Images/Blackberry.jpg"
};

/*define variables
let name1 = "HTC";
let price1 = 40.00;
let image1 = "Images/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "Images/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "Images/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "Images/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "Images/Blackberry.jpg";
*/

//POKE9 array
const products = [product1, product2, product3, product4, product5];

products.forEach(product => {
    console.log(product.brand, product.price, product.image);
});

/*/POKE9 loop
let tableBody = document.querySelector("#productsTable tbody");

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    
    let row = document.createElement("td");

    let brandCell = document.createElement("tr");
    brandCell.textContent = product.brand;
    row.appendChild(brandCell);

    let priceCell = document.createElement("tr");
    priceCell.textContent = "$" + product.price.toFixed(2);
    row.appendChild(priceCell);

    let imageCell = document.createElement("tr");
    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.brand;
    img.width = 151; 
    img.className = "item";
    img.addEventListener('mouseover', function() { changeClassName(this); });
    img.addEventListener('click', function() { resetClassName(this); });
    imageCell.appendChild(img);
    row.appendChild(imageCell);

    tableBody.appendChild(row);
}

/*for (let i=1; eval("typeof name" + i) != 'undefined'; i++) {
    document.querySelector('.main').innerHTML += `
    <section class ="item" onmouseover="changeClassName(this);"onclick="resetClassName(this);">
    <h2>${eval("name"+i)}</h2>
    <p>$${eval("price"+i)}</p>
    <img src="${eval("image"+i)}"/>
    </section>`;
}
*/

//POKE9 loop
let tableBody = document.querySelector("#productsTable tbody");
let productCounter = 0;

for (let product of products) {
    // If productCounter is 0 or 2, create a new row
    if (productCounter == 0 || productCounter == 2) {
        var row = tableBody.insertRow();
    }
    
    let brandCell = row.insertCell();
    brandCell.textContent = product.brand;

    let priceCell = row.insertCell();
    priceCell.textContent = "$" + product.price.toFixed(2);

    let imageCell = row.insertCell();
    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.brand;
    img.width = 152;
    img.className = "item"; // Assign the 'item' class to the image
    img.addEventListener('mouseover', function() {
        changeClassName(this);
    });
    img.addEventListener('click', function() {
        resetClassName(this);
    });
    imageCell.appendChild(img);
    
    productCounter++;
}

//DOM for current year and time
const currentYear = new Date ().getFullYear();
const currentTime = new Date ().toLocaleTimeString([], {hour: '2-digit'});

function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1;
        element.className = 'item rotate';
    }

    //spins=spins+1; 
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress

    if(hits_spins_ratio >= 0.5 && hits<spins) {
            progress='You win!';
    } else if(hits_spins_ratio >= 0.25) {
        progress='Almost there!';
    } else if(hits_spins_ratio>0) {
        progress='On your way!';
    }
    else {
        progress='Get going!';
    }
    win_span.innerHTML=progress;
}

function resetClassName(element) {
    if(element.className=='item rotate'){
        hits=hits+=2;
        element.className = 'item';
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress

    if(hits_spins_ratio >= 0.5 && hits<spins) {
            progress='You win!';
    } else if(hits_spins_ratio >= 0.25) {
        progress='Almost there!';
    } else if(hits_spins_ratio>0) {
        progress='On your way!';
    }
    else {
        progress='Get going!';
    }
    win_span.innerHTML=progress;
}

//footer
const footerTable = `
<table>
    <tr>
        <td></td>
        <td class=“table-header”>Your One Stop Shop For Used Phones - ${first_name.charAt(0).toUpperCase()}.${last_name.charAt(0).toUpperCase()}’s</td>
    </tr>

    <tr>
        <td>1.</td>
        <td>Copyright @ ${first_name} ${last_name}</td>
    </tr>
    
    <tr>
        <td>2.</td>
        <td>${currentYear}</td>
    </tr>   
    
    <tr>
        <td>3.</td>
        <td>${currentTime}</td>
    </tr>
</table>
`;

bottom_title.innerHTML = footerTable;