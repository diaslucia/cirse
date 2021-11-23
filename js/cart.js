// ----- Bring products from localStorage
const carrito = new Carrito(Helper.traerStorage());

// ----- EventListener

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

// ----- Coupon jQuery

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

// ----- Show my cart
Interfaz.mostrarCarrito();
Interfaz.numeroCarrito();
Interfaz.subtotalCarrito();