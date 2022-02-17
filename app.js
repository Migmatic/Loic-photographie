var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


window.onscroll = function () {
    if(document.documentElement.scrollTop > 500){
        document.getElementById("navbar").style.marginTop = "10px";
        document.getElementById("navbar").style.marginLeft = "1%";
        document.getElementById("imgnav").style.width = "100px";
    }
    else {
        document.getElementById("navbar").style.marginTop = "40px";
        document.getElementById("navbar").style.marginLeft = "8%";
        document.getElementById("imgnav").style.width = "160px";

    }
}

