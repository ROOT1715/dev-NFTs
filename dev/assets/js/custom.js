  const btnBurger = document.querySelector('.btn-burger')
  const mobileContainer = document.querySelector('.mobile-container')
  console.log(mobileContainer);

const toggleMobileMenu =()=>{
  mobileContainer.classList.toggle('show')
  btnBurger.classList.toggle('active')
}
btnBurger.addEventListener('click', toggleMobileMenu)