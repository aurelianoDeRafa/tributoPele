let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


const swiper3 = new Swiper(' #premios .swiper', {
  // Optional parameters
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
    mousewheel: true,
      Keyboard: true,
      setWrapperSize: true,

      breakpoints: {
        0: {
          slidesPerView: 1,
          setWrapperSize: true
        },
        555: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          755: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          842: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          1024: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          1250: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          1300: {
            slidesPerView: 2,
            setWrapperSize: true
          }
      }
 
});