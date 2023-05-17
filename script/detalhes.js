import * as Utils from './utils.js'

var searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');

fetch('https://fakestoreapi.com/products/' + id)
    .then(res => res.json())
    .then(product => {

        document.getElementById('product').innerHTML = `
            <div class="col-md-6 col-sm-12">
                <img src="${product.image}" id="product-img" class="d-block h-auto w-auto m-auto p-5">
            </div>
            <div class="col-md-6 col-sm-12">
                <span class="bg-success text-uppercase text-white fw-bold p-1"> ${product.category}</span>
                <h1 class="mt-3 mb-3">${product.title}</h1>
                <p class="mb-3">${product.description}</p>
                <p class="mb-3">${Utils.getStarsHTML(product.rating.rate)}</p>
                <p class="fs-2 fw-bold">${Utils.getFormattedPrice(product.price)}</p>
            </div>
        `

    })
    .catch(error => {
        document.getElementById('product').innerHTML = `
            <h1 class="text-center">Produto não encontrado.</h1>
        `;
    });