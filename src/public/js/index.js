/* eslint-disable no-undef */
const socket = io();

// Escuchar cuando se actualiza la lista de productos
socket.on('productListUpdated', (data) => {
    const productList = document.getElementById('productList');
    let productsHtml = '';
    data.forEach((product) => {
        console.log(product);
        productsHtml += `<li>
        ${product.title} - $ ${product.price}
        <button data-id="${product.id}" class="delete-btn">Eliminar</button>
        </li>`;
    });
    productList.innerHTML = productsHtml;

    // Añadir event listener a cada boton y emitir el evento para eliminar el producto
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            socket.emit('deleteProduct', productId);
        });
    });
});

const form = document.getElementById('addProductForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    if (title && price) {
        const newProduct = { title, price: Number(price) };
        // emitir el nuevo producto al servidor
        socket.emit('addProduct', newProduct);
        form.reset();
    }
});
