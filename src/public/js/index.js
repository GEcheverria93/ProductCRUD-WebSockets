/* eslint-disable no-undef */
const socket = io();

// Escuchar cuando se actualiza la lista de productos
socket.on('productListUpdated', (data) => {
    const productList = document.getElementById('productList');
    let productsHtml = '';
    data.forEach((product) => {
        productsHtml += `<li>${product.title} - $ ${product.price}</li>`;
    });
    productList.innerHTML = productsHtml;
});
