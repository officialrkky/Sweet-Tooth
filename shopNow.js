// variables used
let counter = 1;
var size = 225;
var seconds = 0;
const trainSlide = document.querySelector('.trainSlide');
const trainImages = document.querySelectorAll('.trainSlide img');

// setting the train to start at slide 2 
trainSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// functionn for button
  window.onload = function WindowLoad(start){
    window.setInterval(timedScroll, 2500);
  }

// function called on button press
function timedScroll(){
  trainSlide.style.transition = "transform 0.6s ease-in-out";
  counter++;
  trainSlide.style.transform = "translateX(" + (-size *   counter) + "px)";
};

// pullback to start of train when counter is max
trainSlide.addEventListener('transitionend', function(){
   if (trainImages[counter].id === 'firstClone'){
     trainSlide.style.transition = "none";
     counter = trainImages.length - counter;
      trainSlide.style.transform = "translateX(" + (-size *   counter) + "px)";
   }
})
