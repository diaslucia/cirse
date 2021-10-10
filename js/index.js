//PÁGINA HOME

// Función constructora con class para armar mis objetos

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

// Añadimos los Productos a un array de objetos

const productoArray = [];

productoArray.push(new Productos(1020, "Alex Dress", 2000, 32, "White long dress with red flowers", "../assets/img/card1.jpg"));
productoArray.push(new Productos(1021, "Rebecca Dress", 2800, 35, "Light blue dress with white hearts", "../assets/img/card2.jpg"));
productoArray.push(new Productos(1022, "Sunny Dress", 2900, 15, "Pink and white dress", "../assets/img/card3.jpg"));
productoArray.push(new Productos(1023, "Sandy Dress", 3000, 25, "White dress with borwn flowers", "../assets/img/card4.jpg"));

console.log(productoArray);

// Contenedor de productos en HOME

const contenedorCartas = document.querySelector(".cards__container");

for (const producto of productoArray) {
    let cards = document.createElement("div");
    cards.className = "col-6 col-md-3 col-lg-3 col-xl-3 cards";
    cards.innerHTML = `
    <img src="${producto.img}" alt="${producto.descripcion}"/>
    <p>${producto.nombre}</p>
    <p class="cards__price">${producto.precio}</p>
    <a href=""><button>Shop Now</button></a>`;

    contenedorCartas.appendChild(cards);
}

