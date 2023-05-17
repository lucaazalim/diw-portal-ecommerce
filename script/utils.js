export function getProductHref(id) {
    return `detalhes.html?id=${id}`;
}

export function getStarsHTML(rate) {

    let starsAmount = Math.round(rate);
    let starsHTML = `<span class="text-warning">`;

    for (let i = 0; i < starsAmount; i++) {
        starsHTML += `<i class="fa-solid fa-star"></i>`;
    }

    starsHTML += `</span>`;

    for (let i = 0; i < 5 - starsAmount; i++) {
        starsHTML += `<i class="fa-solid fa-star"></i>`;
    }

    let rateLocalized = rate.toLocaleString('pt-BR', { useGrouping: true });

    return `${starsHTML} (${rateLocalized})`;

}

export function getFormattedPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}