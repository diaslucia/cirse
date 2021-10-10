const contenedorCarrito = document.querySelector(".cart__container");

const productosLocalStorage = JSON.parse(localStorage.getItem("carrito"));

// ----- Calcular subtotal compra

const subtotal = document.querySelector(".subtotal");

const sumarCarrito = () => {
    let subtotalCarrito = 0;
    for (const producto of productosLocalStorage) {
        subtotalCarrito = subtotalCarrito + (producto.precio);
    }
    console.log(subtotalCarrito);
    subtotal.innerText = `Subtotal: $${subtotalCarrito}`
    localStorage.setItem("subtotalAPagar", subtotalCarrito);
}

// ----- Agregar productos a la canasta

for (const producto of productosLocalStorage) {
    let carritoDiv = document.createElement("div");
    carritoDiv.className = "cart__div";
    carritoDiv.innerHTML = 
    `<img src="${producto.img}" alt="${producto.descripcion}"/>
    <p class="dresses__cart--title">${producto.nombre}</p>
    <p class="dresses__cart--price">${producto.precio}</p>`;

    // Botón para elegir la cantidad

    contenedorCarrito.appendChild(carritoDiv);
    sumarCarrito();
}

// ----- Hacer que el carrito quede guardado aunque refresque la página

if(productosLocalStorage !== null) {
    for(const producto of productosLocalStorage) {
       agregarProductoCarrito(producto);
    };
}
