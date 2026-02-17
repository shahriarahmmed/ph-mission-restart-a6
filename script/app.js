let cart = [];

const cartCountElement = document.getElementById("cart-count");

const addToCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
    }
    updateCartCount();
    console.log(cart);
}

const updateCartCount = () => {
    let totalCount = 0;
    cart.forEach((item) => {
        totalCount += item.quantity;
    })
    cartCountElement.textContent = totalCount;
}

document.getElementById("cart-count").addEventListener("click", () => {
    console.log("Cart contents:", cart); 
    
    
});



const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => displayProducts(json));
}

const filterCategory = async (category) => {
    if (category === "all") {
        url = "https://fakestoreapi.com/products";
    } else {
        url = `https://fakestoreapi.com/products/category/${category}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    displayProducts(data);
}

const trendingProducts = async (trending) => {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    console.log("total data",data);
    // const randomProducts = data[Math.floor(Math.random() * data.length)];
    const randomProducts = data.sort(() => 0.5 - Math.random());
    console.log("random products", randomProducts);
    const topProducts = randomProducts.slice(0, 3);
    console.log("top 3 products:",topProducts);
    displayTrendingProducts(topProducts);
}

trendingProducts();

const displayTrendingProducts = (products) => {
    const trendingContainer = document.getElementById("trending-container");
    trendingContainer.innerHTML = ""; 
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.innerHTML = `
            <div class="card w-full bg-base-100 shadow-sm">
                    <figure><img class="mx-auto" width="150" height="150"
                            src="${product.image}"
                            alt="tshirt" /></figure>
                    <div class="card-body">
                        <div class="flex gap-8">
                            <div class="badge badge-primary">${product.category}</div>
                            <div class="rating rating-sm ">
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star" checked="checked" />
                                ${product.rating.rate} (${product.rating.count})
                            </div>
                        </div>
                        <h2 class="card-title">${product.title}</h2>
                        <p class="text-xl font-bold">$${product.price}</p>
                        <div class="card-actions justify-center ">
                            <button class="btn btn-outline px-10">Details</button>
                            <button class="btn btn-primary px-10" onclick="addToCart(${product.id})">Add</button>

                        </div>
                    </div>
                </div>
        `;
        trendingContainer.append(productCard);
    });
}



const displayProducts = (products) => {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        // console.log(product);
        const productCard = document.createElement("div");
        productCard.innerHTML = `
           <div class="card w-full bg-base-100 shadow-sm">
                    <figure><img class="mx-auto" width="150" height="150"
                            src="${product.image}"
                            alt="tshirt" /></figure>
                    <div class="card-body">
                        <div class="flex gap-8">
                            <div class="badge badge-primary">${product.category}</div>
                            <div class="rating rating-sm justify-end ">
                                <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-700"
                                    aria-label="1 star" checked="checked" />
                                    
                                </div>
                                <span class="ml-2 text-black">${product.rating.rate} (${product.rating.count})</span>
                        </div>
                        <h2 class="card-title">${product.title}</h2>
                        <p class="text-xl font-bold">$${product.price}</p>
                        <div class="card-actions justify-center ">
                            <button class="btn" onclick="loadProductDetails(${product.id})" btn-outline px-10">Details</button>
                            <button class="btn btn-primary px-10" onclick="addToCart(${JSON.stringify(product.id)})">Add</button>

                        </div>
                    </div>
                </div>
        `;
        productCard.querySelector("button").addEventListener("click", () => {
            my_modal_5.showModal();
        });
        productsContainer.append(productCard);
    });
}

const loadProductDetails = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    // console.log(url);
    const  res = await fetch(url);
    const details = await res.json();
    displayProductsDetails(details);
    console.log(details);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json);
    //         displayProductsDetails(json);
    //     }
    //     );
}

const displayProductsDetails = (product) => {
    // console.log("displaying product details:", product);
    const productDetailsContainer = document.getElementById("product-details");
    productDetailsContainer.innerHTML = `
                    <div class="card w-full bg-base-100 shadow-sm">
                        <div class="card-body">
                            

                            <h2 class="card-title">${product.title}</h2>
                            <p class="text-xl font-bold">${product.description}</p>
                            <p class="text-xl font-bold">Price: $${product.price}</p>
                            <p class="text-xl font-bold">Rating: ${product.rating.rate}</p>
                            
                            <button class="btn btn-primary px-10">Add to cart</button>
                        </div>
                    </div>
                <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn">Close</button>
                        </form>
                    </div>
    `;
    document.getElementById("my_modal_5").showModal();
}





loadProducts();