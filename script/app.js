const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => displayProducts(json));
}

const displayProducts = (products) => {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        console.log(product);
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
                            <button class="btn btn-outline px-10">Details</button>
                            <button class="btn btn-primary px-10">Add</button>

                        </div>
                    </div>
                </div>
        `;
        productsContainer.append(productCard);
    });
}

loadProducts();