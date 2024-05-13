const gap = 50;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));







ScrollReveal({ 
    reset: true,
    duration: 2000,
    delay: 200,
    distance: '80px'
});
 ScrollReveal().reveal('.sermon',{origin: 'top'}); 
 ScrollReveal().reveal('.about',{origin: 'bottom', delay: 200});        
 ScrollReveal().reveal('.gallery',{origin: 'right', delay: 300, duration: 1000});       
 ScrollReveal().reveal('.event',{origin: 'left', delay: 300, duration: 1000});   
 ScrollReveal().reveal('.blog',{origin: 'bottom', delay: 300, duration: 1000});   
 ScrollReveal().reveal('footer',{origin: 'left', delay:400, durartion: 200, distance: '100px'});

