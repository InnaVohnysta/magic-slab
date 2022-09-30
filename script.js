let sliderItems = [...document.querySelectorAll('.slider-item')];
let leftButton = document.querySelector('.slider-button__left');
let rightButton = document.querySelector('.slider-button__right');


leftButton.addEventListener('click', function (){
  sliderItems.unshift(sliderItems.pop());
  for (const i in sliderItems){
    sliderItems[i].classList.remove('slider-item-1','slider-item-2','slider-item-3','slider-item-4');
  }
  sliderItems.slice(0, 4).forEach((el, i) => {
      el.classList.add(`slider-item-${i+1}`);
  });
});

rightButton.addEventListener('click',  function (){
  sliderItems.push(sliderItems.shift());
  for (const i in sliderItems){
    sliderItems[i].classList.remove('slider-item-1','slider-item-2','slider-item-3','slider-item-4');
  }
  sliderItems.slice(0, 4).forEach((el, i) => {
      el.classList.add(`slider-item-${i+1}`);
  });
} );



