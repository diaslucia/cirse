Interfaz.numeroCarrito();

// jQuery y DOM

$(".banner").html(`
<a href="../views/dresses.html"><img class="banner__img banner__img1" src="../assets/img/banner1.jpg"/></a>
<a href="../views/dresses.html"><img class="banner__img banner__img2" src="../assets/img/banner2.jpg"/></a>
<a href="../views/dresses.html"><img class="banner__img banner__img3" src="../assets/img/banner3.jpg"/></a>
<a href="../views/dresses.html"><img class="banner__img banner__img4" src="../assets/img/banner4.jpg"/></a>
<a href="../views/dresses.html"><img class="banner__img banner__img5" src="../assets/img/banner5.jpg"/></a>
<p class="poem">"Infinite in mystery is the gift of the Goddess,
We seek it thus, and take to the sky,
Ripples form on the water's surface,
The wandering soul knows no rest."</p>
`);

// Animations

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
