// Get products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// Display products
function displayProducts(list){
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    list.forEach((product, index) => {
        productList.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
            </div>
        `;
    });
}

// Add product
function addProduct(){
    let name = prompt("Enter product name:");
    let price = prompt("Enter product price:");

    if(name && price){
        let newProduct = {
            name:name,
            price:price
        };

        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts(products);
    }
}

// Search product
function searchProduct(){
    let searchValue = document.getElementById("search").value.toLowerCase();

    let filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filtered);
}

// Load on start
displayProducts(products);
