//declare store name
const first_name="Jessica";
const last_name ="Bandol's";
const store_name ="Bandol";

//header
const firstNameSpan = document.getElementById('first_name_span');
const lastNameSpan = document.getElementById('last_name_span');
firstNameSpan.textContent = first_name;
lastNameSpan.textContent = last_name;
top_title.innerHTML = ("Used Smart Phone Store");

//hits,spins
let hits= 0;
let spins=0;
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

//POKE9 array
const products = [product1, product2, product3, product4, product5];

//for loop
for (let i=0; i < products.length; i++) {
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item">
        <h2>${product.brand}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" onmouseover="changeClassName(this);" onclick="resetClassName(this);" />
        <label id="quantity${i}_label" for="quantity${i}">Quantity Desired</label>
        <input type="text" name="quantity${i}" id="quantity${i}">
    </section>`;
}

//DOM for current year and time
const currentYear = new Date ().getFullYear();
const currentTime = new Date ().toLocaleTimeString([], {hour: '2-digit'});

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

function changeClassName(imgElement) {
    if(imgElement.className != 'rotate') {
        imgElement.className = 'rotate'; 
        spins = spins + 1;
    }
    if(spins<2*hits&&hits<spins){
        over_half=true;
    }

    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}

function resetClassName(imgElement) {
    if(imgElement.className == 'rotate') {
        imgElement.className = ''; 
        hits = hits + 2;
    } else {
        changeClassName(imgElement);
    }
    if(spins<2*hits&&hits<spins){
    } over_half=true;
    win_span.innerHTML=over_half;
    hits_span.innerHTML=hits;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}