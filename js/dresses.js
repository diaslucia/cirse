// ----- Bring products from localStorage
const carrito = new Carrito(Helper.traerStorage());

// ----- Sort By/Filter By Buttons

document.getElementById("dropdown").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  // ----- Sort by
  
  const sortByDropdown = document.querySelector(".dropdownmenu__sortby");
  if (e.target.classList.contains("button__sortby")) {Filtro.display(sortByDropdown);}
  
  if (e.target.classList.contains("filter__high")) {Filtro.highLowFiltro();Filtro.display(sortByDropdown);}
  if (e.target.classList.contains("filter__low")) {Filtro.lowHighFiltro();Filtro.display(sortByDropdown);}
  if (e.target.classList.contains("filter__recommended")) {Interfaz.mostrarTodosLosVestidos(productos);Filtro.display(sortByDropdown);}
  
  // ----- Filter By

  const filterByDropdown = document.querySelector(".dropdownmenu__filterby");
  if (e.target.classList.contains("button__filterby")) {Filtro.display(filterByDropdown);}
  
  const filterByLength = document.querySelector("#filter__length");
  if (e.target.classList.contains("filter__lengthButton")) {Filtro.display(filterByLength);}

  const filterByNeck = document.querySelector("#filter__neck");    
  if (e.target.classList.contains("filter__neckButton")) {Filtro.display(filterByNeck);}
      
  const filterBySleeve = document.querySelector("#filter__sleeve");
  if (e.target.classList.contains("filter__sleeveButton")) {Filtro.display(filterBySleeve);}

  if (e.target.classList.contains("clear")) {Interfaz.mostrarTodosLosVestidos(productos);Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("mini")) {Filtro.filtro("mini");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("aboveKnee")) {Filtro.filtro("above knee");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("midi")) {Filtro.filtro("midi");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("long")) {Filtro.filtro("long");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("collared")) {Filtro.filtro("collared");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("vNeck")) {Filtro.filtro("v neck");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("scoop")) {Filtro.filtro("scoop neck");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("square")) {Filtro.filtro("square neck");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("sleeveless")) {Filtro.filtro("sleeveless");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("shortSleeve")) {Filtro.filtro("short sleeve");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("longSleeve")) {Filtro.filtro("long sleeve");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("3/4Sleeve")) {Filtro.filtro("3/4 sleeve");Filtro.display(filterByDropdown);}
});

// ----- EventListener

document.getElementById("dresses__container").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target.classList.contains("agregar")) {
        const producto = Helper.obtenerProductoPorId(e.target.id);
        carrito.agregarProducto(producto);
        Helper.guardarStorage("carrito", carrito.obtenerProductos());
        Interfaz.numeroCarrito();
    }
});

// ----- Show my products
const URL = "../JSON/productos.json";
let productos;

jQuery(() => {
  $.get(URL, (respuesta, estado) => {
    if (estado === "success") {
      productos = respuesta;
      Interfaz.mostrarTodosLosVestidos(productos);
      Interfaz.numeroCarrito();
      }
    });
});
