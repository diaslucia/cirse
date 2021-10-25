// ----- Traigo los productos del localStorage
const carrito = new Carrito(Helper.traerStorage());

// ----- Sort By Button

document.getElementById("dropdown").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const sortByDropdown = document.querySelector(".dropdownmenu__sortby");
  if (e.target.classList.contains("button__sortby")) {Filtro.display(sortByDropdown);}
 
  if (e.target.classList.contains("filter__high")) {Filtro.highLowFiltro();Filtro.display(sortByDropdown);}
  if (e.target.classList.contains("filter__low")) {Filtro.lowHighFiltro();Filtro.display(sortByDropdown);}
  if (e.target.classList.contains("filter__recommended")) {Interfaz.mostrarTodosLosVestidos(productos);Filtro.display(sortByDropdown);}

}); 


// ----- Delegación de eventos: Escucho si se hace click en el div

document.getElementById("accesories__container").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target.classList.contains("agregar")) {
        const accesorio = Helper.obtenerProductoPorId(e.target.id);
        carrito.agregarProducto(accesorio);
        Helper.guardarStorage("carrito", carrito.obtenerProductos());
        Interfaz.numeroCarrito();
    }
});

// ----- Quiero mostrar todos mis productos cuando abra la página
Interfaz.mostrarTodosLosAccesorios(accesorios);
Interfaz.numeroCarrito();

