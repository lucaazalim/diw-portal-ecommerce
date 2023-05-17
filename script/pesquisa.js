import * as Utils from './utils.js'

let searchParams = new URLSearchParams(window.location.search);
let titleParam = searchParams.get('title');
let categoryParam = searchParams.get('category');
let minRatingParam = searchParams.get('min-rating')
let minPriceParam = searchParams.get('min-price');
let maxPriceParam = searchParams.get('max-price');

fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(products => {

        products = products.filter(product => {

            if (titleParam && !Utils.normalize(product.title).includes(Utils.normalize(titleParam))) {
                return false;
            }

            if (categoryParam && product.category != categoryParam) {
                return false;
            }

            if (minRatingParam && product.rating.rate < parseInt(minRatingParam)) {
                return false;
            }

            if (minPriceParam && product.price < parseFloat(minPriceParam)) {
                return false;
            }

            if (maxPriceParam && product.price > parseFloat(maxPriceParam)) {
                return false;
            }

            return true;

        });

        document.getElementById('results').innerHTML += `<p class="fw-bold text-center">${products.length} produtos encontrados...</p><hr>`

        for (const product of products) {

            document.getElementById('results').innerHTML += `
                <div class="col-lg-3 col-md-12">
                    <a href=${Utils.getProductHref(product.id)}>
                        <img src="${product.image}" class="product-img d-block h-auto w-auto m-auto p-5">
                    </a>
                </div>
                <div class="col-lg-9 col-md-12">
                    <span class="bg-success text-uppercase text-white fw-bold p-1"> ${product.category}</span>
                    <a href=${Utils.getProductHref(product.id)}>
                        <h2 class="mt-3 mb-2">${product.title}</h2>
                    </a>
                    <p class="mb-2">${product.description}</p>
                    <p class="mb-2">${Utils.getStarsHTML(product.rating.rate)}</p>
                    <p class="fs-2 fw-bold">${Utils.getFormattedPrice(product.price)}</p>
                </div>
                <hr>
            `

        }

    })
    .catch(error => console.log(error));