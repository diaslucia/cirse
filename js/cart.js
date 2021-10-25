// ----- Traigo los productos del localStorage
const carrito = new Carrito(Helper.traerStorage());

// ----- Delegación de eventos: Escucho si se hace click en el div

document.querySelector(".cart__container").addEventListener("click", (e) => {
    if (e.target.classList.contains("calc__minus")) {
        carrito.decrementarProducto(e.target.id);
        Helper.guardarStorage("carrito", carrito.obtenerProductos());
        Interfaz.mostrarCarrito();
        Interfaz.numeroCarrito();
        Interfaz.subtotalCarrito();
    } else if (e.target.classList.contains("calc__plus")) {
        carrito.incrementarProducto(e.target.id);
        Helper.guardarStorage("carrito", carrito.obtenerProductos());
        Interfaz.mostrarCarrito();
        Interfaz.numeroCarrito();
        Interfaz.subtotalCarrito();
    }
});

//Queremos que al cargar la página se vea el carrito
Interfaz.mostrarCarrito();
Interfaz.numeroCarrito();
Interfaz.subtotalCarrito();