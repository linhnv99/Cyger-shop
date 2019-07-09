document.addEventListener('DOMContentLoaded', function () {

   var slides = document.querySelectorAll('.slide > ul > li');
   var nut = document.querySelectorAll('.nut > span');
   var nextBtn = document.querySelector('.slide .next-btn > p.arrow');
   console.log(nextBtn);

   function resetSlide() {
      for (let i = 0; i < slides.length; i++) {
         slides[i].classList.remove('hienra');
      }
   }

   function resetNut() {
      for (let i = 0; i < nut.length; i++) {
         nut[i].classList.remove('orange');
      }
   }
   // nut slide
   for (let i = 0; i < nut.length; i++) {
      nut[i].addEventListener('click', function () {
         var nutht = this;
         var idSlide = 0;

         for (; nutht = nutht.previousElementSibling; idSlide++) {}

         resetSlide();
         resetNut();
         slides[idSlide].classList.add('hienra');
         nut[idSlide].classList.add('orange');

      })
   }
   // next slide
   nextBtn.addEventListener('click', function () {

      // clearInter(timer); //clear time slide

      var slideht = document.querySelector('.slide ul li.hienra');
      var vtSlideht = 0;
      for (; slideht = slideht.previousElementSibling; vtSlideht++) {}

      resetSlide();
      resetNut();
      if (vtSlideht === slides.length - 1) {
         vtSlideht = -1;
         slides[vtSlideht + 1].classList.add('hienra');
         nut[vtSlideht + 1].classList.add('orange');
      }
      slides[vtSlideht + 1].classList.add('hienra');
      nut[vtSlideht + 1].classList.add('orange');
   })
   //time next slide
   var timer = setInterval(() => {
      var slideht = document.querySelector('.slide ul li.hienra');
      var vtSlideht = 0;
      for (; slideht = slideht.previousElementSibling; vtSlideht++) {}

      resetSlide();
      resetNut();
      if (vtSlideht === slides.length - 1) {
         vtSlideht = -1;
         slides[vtSlideht + 1].classList.add('hienra');
         nut[vtSlideht + 1].classList.add('orange');
      }
      slides[vtSlideht + 1].classList.add('hienra');
      nut[vtSlideht + 1].classList.add('orange');
   }, 4500);
   //clear khi click vao nut hoac next
   function clearInter() {
      clearInterval(timer);
   }

   for (let i = 0; i < nut.length; i++) {
      nut[i].addEventListener('click', clearInter);
   }
   //cuon chuot thay doi nav
   window.onscroll = function () {
      var nav = document.querySelector('.nav');
      var top = document.body.scrollTop || document.documentElement.scrollTop;

      if (top > 200) {
         nav.style.backgroundColor = 'white';
         nav.style.boxShadow = '0 0 1rem #ddd';
      } else {
         nav.style.backgroundColor = 'transparent';
         nav.style.boxShadow = '0 0 1rem transparent';
      }

   }
}, false);