// cuando clickeas el boton cambia entre hiden y showing el contenido del dropdown 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// cierra el dropdown cuando clickeas afuera
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


// siguiente y anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // cambia imagen cada 5 segundos
}