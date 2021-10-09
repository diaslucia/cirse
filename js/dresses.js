// ----- LocalStorage array

const carritoLocalStorage = [];

// ----- Función constructora

class Productos {
    constructor (id, nombre, precio, stock, descripcion, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = `$${precio}`;
        this.stock = stock;
        this.descripcion = descripcion;
        this.img = img;
        this.cantidad = 1;
    }
} 

// ----- Añadimos los Productos a un array de objetos

const productoArray = [];

productoArray.push(new Productos(1020, "Alex Dress", 2000, 32, "White long dress with red flowers", "../assets/img/card1.jpg"));
productoArray.push(new Productos(1021, "Rebecca Dress", 2500, 35, "Light blue dress with white hearts", "../assets/img/card2.jpg"));
productoArray.push(new Productos(1022, "Sunny Dress", 2500, 15, "Pink and white dress", "../assets/img/card3.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));

console.log(productoArray);

// ----- Agregar productos a la tienda

const contenedorVestidos = document.querySelector(".dresses__container");

for (const producto of productoArray) {
    let vestidoDiv = document.createElement("div");
    vestidoDiv.className = "dresses__div";
    vestidoDiv.innerHTML = `
    <img src="${producto.img}" alt="${producto.descripcion}"/>
    <p class="dresses__title">${producto.nombre}</p>
    <p class="dresses__price">${producto.precio}</p>`;

    //Agregar botón
    
    let botonAddCart = document.createElement ("button");
    botonAddCart.innerText="Add to Cart";
    botonAddCart.onclick = () => agregarProductoCarrito(producto);


    vestidoDiv.appendChild(botonAddCart);
    contenedorVestidos.appendChild(vestidoDiv);
}

// ----- Agrega el producto al Carrito

const contenedorCarrito = document.querySelector(".cart__container");

const agregarProductoCarrito = (producto) => {
    console.log("Hiciste Click");
    let carritoDiv = document.createElement("div");
    carritoDiv.className = "cart__div";
    carritoDiv.innerHTML = `
    <img src="${producto.img}" alt="${producto.descripcion}"/>
    <p class="dresses__title">${producto.nombre}</p>
    <p class="dresses__price">${producto.precio}</p>
    `;

    carritoLocalStorage.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carritoLocalStorage));

    // --------------------------------------------------------------------------------------------------- PROBLEMA???
    contenedorCarrito.appendChild(carritoDiv);
}

// ----- Hacer que el carrito quede guardado aunque refresque la página

const productosLocalStorage = JSON.parse(localStorage.getItem("carrito"));

if(productosLocalStorage !== null) {
 for(const producto of productosLocalStorage) {
    agregarProductoCarrito(producto);
 }
  }