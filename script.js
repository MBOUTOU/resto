const swiper = new Swiper('.swapper', {
  loop: true,
  spaceBetween: 60,
  autoplay :{
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 breakpoints: {
    0 :{
        slidesPerView : 1,
        spaceBetween: 40,
    },
     700:{
      slidesPerView : 2,
      spaceBetween: 40,
    },

     1024 :{
        slidesPerView: 3,
    }
  }

});


// -----------------------------------------------------------

const SurvoleParant = document.querySelector(".survolElement");
const Blockpopup = SurvoleParant.querySelector(".block-flottante");
let timeoutId;

SurvoleParant.addEventListener("mouseenter", () =>{
   clearTimeout(timeoutId);
   SurvoleParant.classList.add("active");
   Blockpopup.classList.add("active");
})

SurvoleParant.addEventListener("mouseleave", () =>{
   timeoutId = setTimeout(() =>{
     SurvoleParant.classList.remove("active");
     Blockpopup.classList.remove("active");
   }, 100)
})

// -------------------------------------

const buttonMenu = document.querySelector(".button-Menu")
const bodyStyle = document.querySelector("body");
const Linkstyle = document.querySelector(".nav-links");

buttonMenu.addEventListener("click",() =>{
  buttonMenu.classList.toggle("active");
  bodyStyle.classList.toggle("active");
  Linkstyle.classList.toggle("active");
})