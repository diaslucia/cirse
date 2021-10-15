// ----- Función constructora

class Accesorios {
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

const accesorioArray = [];

accesorioArray.push(new Accesorios(101, "Crystal Earrings", 550, 25, "Long earrings with tiny crystals", "../assets/img/a1.jpg"));
accesorioArray.push(new Accesorios(102, "Charming Necklace", 400, 25, "Double long gold necklace", "../assets/img/a2.jpg"));
accesorioArray.push(new Accesorios(103, "Mila Set of Rings", 590, 25, "Set of seven golden rings", "../assets/img/a3.jpg"));
accesorioArray.push(new Accesorios(104, "Stary Night Necklace", 450, 25, "Golden necklace with stars pendants ", "../assets/img/a4.jpg"));
accesorioArray.push(new Accesorios(105, "Rose Chocker", 530, 25, "Chocker with pink roses", "../assets/img/a5.jpg"));
accesorioArray.push(new Accesorios(106, "Claire Set", 600, 25, "Golden set of earrings and chain", "../assets/img/a6.jpg"));
accesorioArray.push(new Accesorios(107, "Samantha Earrings", 570, 25, "Color squared earrings", "../assets/img/a7.jpg"));
accesorioArray.push(new Accesorios(108, "Air Ring", 320, 25, "Ring with three pearls", "../assets/img/a8.jpg"));
accesorioArray.push(new Accesorios(109, "Life Necklace", 400, 25, "Long golden necklace with flowery pendant", "../assets/img/a9.jpg"));
accesorioArray.push(new Accesorios(110, "Goddes Earrings", 600, 25, "Circular white earrings", "../assets/img/a10.jpg"));
accesorioArray.push(new Accesorios(111, "Life Earrings", 320, 25, "Circular earrings with a pearl", "../assets/img/a11.jpg"));
accesorioArray.push(new Accesorios(112, "Pearl Necklace", 540, 25, "Long necklace with pearls", "../assets/img/a12.jpg"));
accesorioArray.push(new Accesorios(113, "Power Set", 640, 25, "Set of two necklaces and four rings", "../assets/img/a13.jpg"));
accesorioArray.push(new Accesorios(114, "Dara Set", 610, 25, "Set of necklace with a black crystal and matching ring", "../assets/img/a14.jpg"));
accesorioArray.push(new Accesorios(115, "Liberty Set", 590, 25, "Set of par of earrings and ring", "../assets/img/a15.jpg"));
accesorioArray.push(new Accesorios(116, "Roma Bracelet", 350, 25, "Pink cuarz bracelet", "../assets/img/a16.jpg"));
accesorioArray.push(new Accesorios(117, "Line Set", 600, 25, "Set of silver ring earrings and a chain", "../assets/img/a17.jpg"));
accesorioArray.push(new Accesorios(118, "Bear Set", 590, 25, "Set of bear earrings and ring", "../assets/img/a18.jpg"));
accesorioArray.push(new Accesorios(119, "Oval Earrings", 600, 25, "Oval silver earrings", "../assets/img/a19.jpg"));
accesorioArray.push(new Accesorios(120, "Lara Earrings", 450, 25, "Woolen earrings", "../assets/img/a20.jpg"));
accesorioArray.push(new Accesorios(121, "Madam Set", 660, 25, "Set of crystal bracelet and ring", "../assets/img/a21.jpg"));
accesorioArray.push(new Accesorios(122, "Emma Necklace", 580, 25, "Yellow cuarz pendant", "../assets/img/a22.jpg"));
accesorioArray.push(new Accesorios(123, "Lord Earrings", 500, 25, "Golden earrings with a pearl", "../assets/img/a23.jpg"));
accesorioArray.push(new Accesorios(124, "Coper Set", 650, 25, "Set of three golden chains and yellow cuarz stone earrings", "../assets/img/a24.jpg"));
accesorioArray.push(new Accesorios(125, "Loveless Earrings", 550, 25, "Amatist earrings", "../assets/img/a25.jpg"));
accesorioArray.push(new Accesorios(126, "Era Set", 650, 25, "Set of three golden rings, a pendant and a pair of earrings", "../assets/img/a26.jpg"));
accesorioArray.push(new Accesorios(127, "Loveless Bracelet", 500, 25, "Amatist Ring", "../assets/img/a27.jpg"));
accesorioArray.push(new Accesorios(128, "Force Set", 540, 25, "Set of a silver ring and a matching bracelet", "../assets/img/a28.jpg"));

// ----- Agregar accesorios a la tienda

const contenedorAccesorios = document.querySelector(".accesories__container");

for (const producto of accesorioArray) {
    let accesorioDiv = document.createElement("div");
    accesorioDiv.className = "accesories__div";
    accesorioDiv.innerHTML = `
    <img src="${producto.img}" alt="${producto.descripcion}"/>
    <p class="accesories__title">${producto.nombre}</p>
    <p class="accesories__price">${producto.precio}</p>`;

    //Agregar botón
    
    let botonAddCart = document.createElement ("div");
    botonAddCart.className = "button__block";
    botonAddCart.innerHTML="<button>Add to Cart</button>";
    botonAddCart.onclick = () => agregarAlCarrito(producto);

    accesorioDiv.appendChild(botonAddCart);
    contenedorAccesorios.appendChild(accesorioDiv);
}

