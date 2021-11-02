class Helper {
    static traerStorage() {
        let carrito = localStorage.getItem("carrito");
        if (carrito === null) {
            carrito = [];
        } else {
            carrito = JSON.parse(carrito);
        }
        return carrito;
    }

    static guardarStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static obtenerProductoPorId(num) {
        const id = parseInt(num);
        return productos.find((producto) => producto.id === id);
    }

    static obtenerAccesorioPorId(num) {
        const id = parseInt(num);
        return accesorios.find((producto) => producto.id === id);
    }
}

class Carrito {
    constructor(productos = []) {
        this.productos = productos;
    }

    obtenerProductos() {
        return this.productos;
    }

    agregarProducto(producto) {
        let prod = this.productos.find(item => item.producto.id == producto.id);
        if (prod === undefined) {
            this.productos.push({ cantidad: 1, producto: producto});
        } else {
            prod.cantidad++;
        }
    }

    incrementarProducto(id) {
        const item = this.productos.find(item => item.producto.id == id);
        item.cantidad++;
    }

    decrementarProducto(id) {
        const item = this.productos.find(item => item.producto.id == id);
        if (item.cantidad > 1) {
            item.cantidad--;
        } else {
            this.productos = this.productos.filter(item => item.producto.id != id);
            Helper.guardarStorage("carrito", carrito.obtenerProductos());
            Interfaz.mostrarCarrito();
        }
    }
}

class Interfaz { 
    static numeroCarrito() {
        const numeritoDiv = document.querySelector(".circle");
        let numerito = 0;
        const carrito = Helper.traerStorage();
        carrito.forEach(item => {
            numerito += item.cantidad;
        });
        numeritoDiv.textContent = numerito;
    };

    static subtotalCarrito() {
        const subtotalP = document.querySelector(".subtotal");
        let subtotal = 0;
        const carrito = Helper.traerStorage();
        carrito.forEach(item => {
            subtotal += item.cantidad * item.producto.precio;
        });
        subtotalP.textContent = `Subtotal: $${subtotal}`;
    };

    static mostrarTodosLosVestidos(productos) {
        const contenedor = document.querySelector(".dresses__container");
        contenedor.innerHTML = "";

        productos.forEach((producto) => {
            contenedor.innerHTML += `
            <div class="dresses__div">
                <img src="${producto.img}" alt="${producto.descripcion}"/>
                <p class="dresses__title">${producto.nombre}</p>
                <p class="dresses__price">$${producto.precio}</p>
                <button class="button__block agregar" id=${producto.id}>Add to Cart</button>
            </div>
            `;
        });
    };

    static mostrarTodosLosAccesorios(accesorios) {
        const contenedor = document.querySelector(".accesories__container");
        contenedor.innerHTML = "";

        accesorios.forEach((accesorio) => {
            contenedor.innerHTML += `
            <div class="accesories__div">
                <img src="${accesorio.img}" alt="${accesorio.descripcion}"/>
                <p class="accesories__title">${accesorio.nombre}</p>
                <p class="accesories__price">$${accesorio.precio}</p>
                <button class="button__block agregar" id=${accesorio.id}>Add to Cart</button>
            </div>
            `;
        });
    };

    static mostrarCarrito() {
        const contenedor = document.querySelector(".cart__container");
        contenedor.innerHTML = "";
        const carrito = Helper.traerStorage();
        if (carrito.length === 0) {
            contenedor.innerHTML =
            `<div class="cart__empty">
                <p class="emptyCart___title">Oops! Your Shopping Cart is empty</p>
                <a href="../views/dresses.html"><button class="button__emptyCart">Return to Shop</button></a>
            </div>`;
            document.querySelector(".cart__container--price").style.display = "none";
            $(".cart__container").css("align-items", "center");
        } else {
            carrito.forEach((item) => {
                let precioProductoIndividual = item.cantidad * item.producto.precio;
                contenedor.innerHTML += `
                <div class="cart__div">
                    <img src="${item.producto.img}" alt="${item.producto.descripcion}"/>
                    <p class="dresses__cart--title">${item.producto.nombre}</p>
                    <p class="dresses__cart--price">$ ${precioProductoIndividual}</p>
                    <div class="calc">
                    <button class="calc__plus" id=${item.producto.id}>+</button>
                    <p class="calc__number">${item.cantidad}</p>
                    <button class="calc__minus" id=${item.producto.id}>-</button>
                </div>
                </div>
                `; 
            });
            let subtotal = document.querySelector(".cart__container--price")
            subtotal.style.display = "block";
            subtotal.innerHTML = `<p class="subtotal"></p>
            <div class="subtotal__coupon">
                <form name="formCupon" id="form">
                    <input type="text" id="coupon" name="coupon" placeholder=" COUPON CODE" minlength="4" maxlength="10"></input>
                    <input type="submit" id="submit" name="submit" value="SUBMIT"></input>
                    <p id="form__alert">Your code is not valid!</p>
                </form>
            </div>
            <a href="../views/checkout.html"><button class="button__checkout">Checkout</button></a>`

        }
    };

}

class Filtro {
    static highLowFiltro() {
        let nuevoArray = [];
        nuevoArray = Object.assign(nuevoArray, productos);
        nuevoArray.sort(function (a, b) {
            return b.precio - a.precio;});
        Interfaz.mostrarTodosLosVestidos(nuevoArray);    
    }

    static lowHighFiltro() {
        let nuevoArray = [];
        nuevoArray = Object.assign(nuevoArray, productos);
        nuevoArray.sort(function (a, b) {
            return a.precio - b.precio;});
        Interfaz.mostrarTodosLosVestidos(nuevoArray);  
    }

    static filtro(category) {
        let nuevoArray = productos.filter(vestido => vestido.categorias.includes(category));
        Interfaz.mostrarTodosLosVestidos(nuevoArray);
    }

    static display(variable) {
        if(variable.style.display === "block") {
            variable.style.display = "none";}      
          else {variable.style.display = "block";}
    }

    // ----- Filtros de Accesorios

    static highLowAccesorios() {
        let nuevoArray = [];
        nuevoArray = Object.assign(nuevoArray, accesorios);
        nuevoArray.sort(function (a, b) {
            return b.precio - a.precio;});
        Interfaz.mostrarTodosLosAccesorios(nuevoArray);    
    }

    static lowHighAccesorios() {
        let nuevoArray = [];
        nuevoArray = Object.assign(nuevoArray, accesorios);
        nuevoArray.sort(function (a, b) {
            return a.precio - b.precio;});
        Interfaz.mostrarTodosLosAccesorios(nuevoArray);  
    }

    static filtroAccesorios(category) {
        let nuevoArray = accesorios.filter(accesorio => accesorio.categorias.includes(category));
        Interfaz.mostrarTodosLosAccesorios(nuevoArray);
    }
}