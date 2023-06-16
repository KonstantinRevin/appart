let popup = document.querySelector('.call-form'); 
let openPopupButtons = document.querySelectorAll('.adapt-button'); 

openPopupButtons.forEach((button) => { 
  button.addEventListener('click', (e) => { 
      e.preventDefault(); 
      popup.classList.add('call-form--active'); 
  })
});



// document.addEventListener('click', (e) => { 
//   if(e.target === popup) { // Если цель клика - фон, то:
//       popup.classList.remove('call-form--active'); // И с окна
//   };
// });





 // Если ширина браузера больше 992px, то удаляем класс active
const mobileClassRemover = document.getElementById('mobileClassRemover');
window.addEventListener('resize', function() {
  if (window.innerWidth > 992) {
   
    mobileClassRemover.classList.remove('call-form--active');
  };
});