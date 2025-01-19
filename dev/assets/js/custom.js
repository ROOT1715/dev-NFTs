  const btnBurger = document.querySelector('.btn-burger')
  const mobileContainer = document.querySelector('.mobile-container')
  console.log(mobileContainer);

const toggleMobileMenu =()=>{
  mobileContainer.classList.toggle('show')
  btnBurger.classList.toggle('active')
}
btnBurger.addEventListener('click', toggleMobileMenu)

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});