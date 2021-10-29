// ----- Traigo los productos del localStorage
const carrito = new Carrito(Helper.traerStorage());

// ----- Sort By Button

document.getElementById("dropdown").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const sortByDropdown = document.querySelector(".dropdownmenu__sortby");
  if (e.target.classList.contains("button__sortby")) {Filtro.display(sortByDropdown);}
 
  if (e.target.classList.contains("filter__high")) {Filtro.highLowAccesorios();Filtro.display(sortByDropdown);}
  if (e.target.classList.contains("filter__low")) {Filtro.lowHighAccesorios();Filtro.display(sortByDropdown);}
  if (e.target.classList.contains("filter__recommended")) {Interfaz.mostrarTodosLosAccesorios(accesorios);Filtro.display(sortByDropdown);}

  // ----- Filter By

  const filterByDropdown = document.querySelector(".dropdownmenu__filterby");
  if (e.target.classList.contains("button__filterby")) {Filtro.display(filterByDropdown);}
  
  const filterByCategories = document.querySelector("#filter__categories");
  if (e.target.classList.contains("filter__categoriesButton")) {Filtro.display(filterByCategories);}

  const filterByColor = document.querySelector("#filter__color");    
  if (e.target.classList.contains("filter__colorButton")) {Filtro.display(filterByColor);}
      
  const filterByMaterial = document.querySelector("#filter__material");
  if (e.target.classList.contains("filter__materialButton")) {Filtro.display(filterByMaterial);}

  if (e.target.classList.contains("clear")) {Interfaz.mostrarTodosLosAccesorios(accesorios);Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("necklace")) {Filtro.filtroAccesorios("necklace");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("bracelet")) {Filtro.filtroAccesorios("bracelet");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("earrings")) {Filtro.filtroAccesorios("earrings");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("ring")) {Filtro.filtroAccesorios("ring");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("set")) {Filtro.filtroAccesorios("set");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("gold")) {Filtro.filtroAccesorios("gold");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("silver")) {Filtro.filtroAccesorios("silver");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("multicolor")) {Filtro.filtroAccesorios("multicolor");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("white")) {Filtro.filtroAccesorios("white");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("red")) {Filtro.filtroAccesorios("red");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("pink")) {Filtro.filtroAccesorios("pink");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("metal")) {Filtro.filtroAccesorios("metal");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("pearl")) {Filtro.filtroAccesorios("pearl");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("gemstone")) {Filtro.filtroAccesorios("gemstone");Filtro.display(filterByDropdown);}
  if (e.target.classList.contains("other")) {Filtro.filtroAccesorios("other");Filtro.display(filterByDropdown);}

}); 


// ----- Delegación de eventos: Escucho si se hace click en el div

document.getElementById("accesories__container").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target.classList.contains("agregar")) {
        const accesorio = Helper.obtenerAccesorioPorId(e.target.id);
        carrito.agregarProducto(accesorio);
        Helper.guardarStorage("carrito", carrito.obtenerProductos());
        Interfaz.numeroCarrito();
    }
});

// ----- Quiero mostrar todos mis productos cuando abra la página
const URL = "../json/accesorios.json";
let accesorios;

jQuery(() => {
  $.get(URL, (respuesta, estado) => {
    if (estado === "success") {
      accesorios = respuesta;
      Interfaz.mostrarTodosLosAccesorios(accesorios);
      Interfaz.numeroCarrito();
      }
    });
});

