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

// ----- Cupon con jQuery

jQuery(function () {
$("#form").on("submit", function(e) {
    e.preventDefault();

    if ($("#coupon").val() === "CIRSE15OFF") {
        let subtotalSinCupon = $(".subtotal").html();
        subtotalSinCupon = subtotalSinCupon.slice(11);
        let nuevoPrecio = parseInt(subtotalSinCupon) - (parseInt(subtotalSinCupon) * 0.15);
        $(".subtotal").html(`Subtotal: $${nuevoPrecio}`);
        $("#form__alert").css("display", "none");}
    else {
        $("#form__alert").css("display", "block");
        Interfaz.subtotalCarrito();
    }
  })
});

//Queremos que al cargar la página se vea el carrito
Interfaz.mostrarCarrito();
Interfaz.numeroCarrito();
Interfaz.subtotalCarrito();