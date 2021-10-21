// ----- Constantes

const productosLocalStorage = JSON.parse(localStorage.getItem("carrito"));

const numeroCarritoStorage = localStorage.getItem('numeroCarrito');

const numeroCarrito = document.querySelector(".circle");

const contenedorCarrito = document.querySelector(".cart__container");

const subtotal = document.querySelector(".subtotal");

const botonCheckout = document.querySelector(".button__checkout");


// ----- Calcular subtotal compra

const precioANumero = (precio) => parseInt(precio.replaceAll("$", ""));

const sumarCarrito = () => {
    let subtotalCarrito = 0;

    for (const producto of productosLocalStorage) {
        subtotalCarrito = subtotalCarrito + precioANumero(producto.precio);
    }
    subtotal.innerText = `Subtotal: $${subtotalCarrito}`
    localStorage.setItem("subtotalAPagar", subtotalCarrito);
} 

// ----- Agregar productos a la canasta

const agregarProductoCarrito = () => {
    
    for (const producto of productosLocalStorage) {

        const existeProducto = productosLocalStorage.find(productoLocal => productoLocal.id === producto.id);
        console.log(existeProducto);

            if (existeProducto === null) {

                let calcPrecioIndividual = precioANumero(producto.precio) * producto.cantidad;

                let carritoDiv = document.createElement("div");
                carritoDiv.className = "cart__div";
                carritoDiv.innerHTML = 
                `<img src="${producto.img}" alt="${producto.descripcion}"/>
                <p class="dresses__cart--title">${producto.nombre}</p>
                <p class="dresses__cart--price">$ ${calcPrecioIndividual}</p>
                `;

                // Botón para elegir la cantidad
        
                let divCalc = document.createElement("div");
                divCalc.className = "calc";
        
                let calcPlus = document.createElement ("button");
                calcPlus.className = "calc__plus"
                calcPlus.innerHTML = "+";
                calcPlus.onclick = () => masProductos();
        
                let calcNumber = document.createElement ("p");
                calcNumber.className = "calc__number"
                calcNumber.innerHTML = producto.cantidad;
        
                let calcMinus = document.createElement ("button");
                calcMinus.className = "calc__minus"
                calcMinus.innerHTML = "-";
                calcMinus.onclick = () => menosProductos(producto);

                // Append Child
        
                divCalc.appendChild(calcPlus);
                divCalc.appendChild(calcNumber);
                divCalc.appendChild(calcMinus);
                carritoDiv.appendChild(divCalc);
                contenedorCarrito.appendChild(carritoDiv);
                
                sumarCarrito();
            } else {
                console.log("hola");
            }
             
    }
}

// ----- Hacer que el carrito quede guardado aunque refresque la página

if(productosLocalStorage !== null) {
    agregarProductoCarrito();
} else {
    botonCheckout.style.display = "none";
    let carritoVacio = document.createElement("div");
        carritoVacio.className = "cart__empty";
        carritoVacio.innerHTML = 
        `<p class="emptyCart___title">Oops! Your Shopping Cart is empty</p>
        <a href="../views/dresses.html"><button class="button__emptyCart">Return to Shop</button></a>`;

        contenedorCarrito.appendChild(carritoVacio);
        contenedorCarrito.style.display = "block";
}

// ----- Numero del carrito

if(numeroCarritoStorage !== null) {
    numeroCarrito.innerHTML = numeroCarritoStorage;
}

// ----- BOTÓN MÁS PRODUCTOS al carrito --- Todavía no funciona


masProductos = () => {
 console.log("Mas productos")

}


/* const precioProductoCarrito = document.querySelector(".dresses__cart--price");
const numeroProductoCarrito = document.querySelector(".calc__number");

masProductos = (precio) => {
    console.log("vamos de a poco");
    precioIndividual = precioANumero(precioProductoCarrito.innerText);
    console.log(precioIndividual);

    numeroProductoCarrito.innerText ++;
    console.log(precio);

    precioProductoCarrito.innerText = precio * Number(numeroProductoCarrito.innerText);
} */
