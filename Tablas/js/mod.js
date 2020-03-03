function Oscuro(){
   var dark = document.querySelector("div");
   dark.classList.remove("contenedor");
   dark.classList.add("contenedor2");
   console.log(dark);


   var dark2 = document.querySelector("main");
   dark2.classList.remove("main");
   dark2.classList.add("main2");

   var dark3 = document.querySelector("aside2");
   dark3.classList.remove("aside2");
   dark.classList.add("aside3");

}