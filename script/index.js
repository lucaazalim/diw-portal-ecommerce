import * as Utils from './utils.js'

// Categories Dropdown

fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(categories => {

        for (const category of categories) {

            document.getElementById('categories-select').innerHTML += `
                        <option value="${category}">${category}</option>
                    `;

        }

    });

// Products Showcase & Products Featured

fetch('https://fakestoreapi.com/products?limit=12')
    .then(res => res.json())
    .then(products => {

        let sidebarLimit = 6;

        for (const product of products) {

            let href = Utils.getProductHref(product.id);
            let starsHTML = Utils.getStarsHTML(product.rating.rate);
            let price = Utils.getFormattedPrice(product.price);

            document.getElementById('products-showcase').innerHTML += `
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                    <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
                        <a href="${href}">
                            <img 
                                src="${product.image}" 
                                class="card-img-top d-block m-auto h-auto w-auto p-3 products-featured-img"
                            >
                        </a>
                        </div>
                        <div class="card-body">
                            <a href="${href}" class="text-decoration-none">    
                                <h5 class="card-title text-truncate">${product.title}</h5>
                            </a>
                            ${starsHTML}
                            <p class="fs-5 fw-bold">${price}</p>
                        </div>
                    </div>
                </div>`;

            if (sidebarLimit > 0) {

                document.getElementById('products-featured').innerHTML += `
                    <div class="row">
                        <div class="card">
                            <div class="row card-body">
                                <div class="col-sm-4">
                                    <div class="d-flex justify-content-center align-items-center" style="height: 100px;">
                                        <a href="${href}">
                                            <img src="${product.image}" class="products-sidebar-img">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <a href="${href}" class="text-decoration-none">
                                        <h6 class="card-title text-truncate">${product.title}</h6>
                                    </a>
                                    ${starsHTML}
                                    <h6>${price}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>`;

                sidebarLimit--;

            }

        }

    });

// Products Featured