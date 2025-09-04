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
    },

     700:{
      slidesPerView : 2,
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