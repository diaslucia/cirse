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

productoArray.push(new Productos(1, "Folk Dress", 2000, 25, "Button up skater dress", "../assets/img/dresses (1).jpg"));
productoArray.push(new Productos(2, "Cloud Dress", 2200, 25, "A line, long sleeves dress", "../assets/img/dresses (2).jpg"));
productoArray.push(new Productos(3, "Heaven Dress", 3150, 25, "Cotton dress with puffy sleeves", "../assets/img/dresses (3).jpg"));
productoArray.push(new Productos(4, "Sunny Dress", 2900, 25, "Pink and white gingham dress", "../assets/img/dresses (4).jpg"));
productoArray.push(new Productos(5, "Sweet Dress", 2800, 25, "Flowery dress with lace", "../assets/img/dresses (5).jpg"));
productoArray.push(new Productos(6, "Victoria Dress", 3000, 25, "Long patterned dress", "../assets/img/dresses (6).jpg"));
productoArray.push(new Productos(7, "Alex Dress", 2000, 25, "White long dress with red flowers", "../assets/img/dresses (7).jpg"));
productoArray.push(new Productos(8, "Leaf Dress", 1800, 25, "Green slip dress", "../assets/img/dresses (8).jpg"));
productoArray.push(new Productos(9, "Header Dress", 2100, 25, "Light empire II dress", "../assets/img/dresses (9).jpg"));
productoArray.push(new Productos(10, "Telma Dress", 2250, 25, "White button up dress", "../assets/img/dresses (10).jpg"));
productoArray.push(new Productos(11, "Rocky Dress", 2500, 25, "Button up dress with short slevees", "../assets/img/dresses (11).jpg"));
productoArray.push(new Productos(12, "Rebecca Dress", 2800, 25, "Dress with white little hearts", "../assets/img/dresses (12).jpg"));
productoArray.push(new Productos(13, "Camilla Dress", 2600, 25, "Light blue polka dot dress", "../assets/img/dresses (13).jpg"));
productoArray.push(new Productos(14, "Loner Dress", 3200, 25, "Button up long dress", "../assets/img/dresses (14).jpg"));
productoArray.push(new Productos(15, "River Dress", 3300, 25, "Pink 3/4 slevees dress", "../assets/img/dresses (15).jpg"));
productoArray.push(new Productos(16, "Soul Dress", 3350, 25, "Bow neck dress", "../assets/img/dresses (16).jpg"));
productoArray.push(new Productos(17, "Rose Dress", 3100, 25, "Peter pan collar dress", "../assets/img/dresses (17).jpg"));
productoArray.push(new Productos(18, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/dresses (18).jpg"));
productoArray.push(new Productos(19, "Mary Dress", 3500, 25, "Poet collar long dress", "../assets/img/dresses (19).jpg"));


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
    
    let botonAddCart = document.createElement ("div");
    botonAddCart.className = "button__block";
    botonAddCart.innerHTML="<button>Add to Cart</button>";
    botonAddCart.onclick = () => agregarAlCarrito(producto);

    vestidoDiv.appendChild(botonAddCart);
    contenedorVestidos.appendChild(vestidoDiv);
}

// ----- Agrega el producto al Carrito

const agregarAlCarrito = (producto) => {
    
    let carrito = localStorage.getItem('carrito');

    if (carrito === null) {
        carrito = [];
    } else {
        carrito = JSON.parse(carrito);
    }

    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('agregado correctamente');
    sumarNumeroCarrito();
}


// ----- Sumar número carrito

const numeroCarrito = document.querySelector(".circle");

const sumarNumeroCarrito = () => {

    let numeroCarritoInicial = localStorage.getItem('numeroCarrito');

    if (numeroCarritoInicial === null) {
        numeroCarritoInicial = 0;
        console.log("esta vacio")
    } else {
        numeroCarritoInicial = localStorage.getItem('numeroCarrito');
        console.log("no esta vacio!");
    }

    let numeroMostrar = Number(numeroCarritoInicial) + 1;
    numeroCarrito.innerHTML = Number(numeroMostrar);
    localStorage.setItem('numeroCarrito', numeroMostrar);
}

// ----- Que se guarde el número del carrito por más que se refresque

const numeroCarritoStorage = localStorage.getItem('numeroCarrito');

if(numeroCarritoStorage !== null) {
    numeroCarrito.innerHTML = numeroCarritoStorage;
}







