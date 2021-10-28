Interfaz.numeroCarrito();

$(".banner").html(`
<img class="banner__img" src="../assets/img/banner1.jpg"/>
<img class="banner__img" src="../assets/img/banner2.jpg"/>
<img class="banner__img" src="../assets/img/banner3.jpg"/>
<img class="banner__img" src="../assets/img/banner4.jpg"/>
<img class="banner__img" src="../assets/img/banner5.jpg"/>
`);

// Animaciones

$( document ).ready(function() {
    $(".title").css({"color": "#c2a893", "letter-spacing": "1.5rem"});
    $(".subtitle").fadeIn(4000);
    $(".newcollection__img").css({"filter": "saturate(1)"});
});

// Slide

  $("#newcollection__left").on("click", function () {
    $(".slider").toggleClass("showSlide");
  });
  $("#newcollection__right").on("click", function () {
    $(".slider").toggleClass("showSlide");
  });
