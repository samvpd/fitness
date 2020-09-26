const gallerySlider = () => {
  const gallery = document.querySelector("#gallery"),
    gallerySlider = gallery.querySelector(".gallery-slider"),
    slide = gallerySlider.querySelectorAll(".slide");
  gallerySlider.style.position = "relative";

  const leftArrow = document.createElement('div'),
    leftArrowSpan = document.createElement('span'),
    leftArrowImg = document.createElement('img');

  leftArrow.classList.add('slider-arrow', 'prev');
  leftArrowSpan.classList.add('span-prev');
  leftArrowImg.src = 'images/arrow-left.png';

  leftArrowSpan.append(leftArrowImg);
  leftArrow.append(leftArrowSpan);
  gallerySlider.append(leftArrow);

  const rightArrow = document.createElement('div'),
    rightArrowSpan = document.createElement('span'),
    rightArrowImg = document.createElement('img');

  rightArrow.classList.add('slider-arrow', 'next');
  rightArrowSpan.classList.add('span-next');
  rightArrowImg.src = 'images/arrow-right.png';

  rightArrowSpan.appendChild(rightArrowImg);
  rightArrow.appendChild(rightArrowSpan);
  gallerySlider.appendChild(rightArrow);

  const dotsDiv = document.createElement("div"),
    dotsUl = document.createElement("ul");
  dotsDiv.classList.add("slider-dots");

  slide.forEach((item, index) => {
    if (index !== 0) {
      item.style.display = "none";
    }
    const dotsLi = document.createElement("li"),
      dotsButton = document.createElement("button");
    dotsButton.style.display = "flex";
    dotsLi.append(dotsButton);
    dotsUl.append(dotsLi);
    dotsDiv.append(dotsUl);
  });

  gallerySlider.append(dotsDiv);
  const dot = document.querySelectorAll('.gallery-slider .slider-dots li button');
  dot[0].classList.add('slick-active');
  dot[0].style.backgroundColor = "#f4c71b";

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index) => {
    elem[index].style.display = "none";
  };
  const prevDot = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
    elem[index].style.backgroundColor = "white";
  };

  const nextSlide = (elem, index) => {
    elem[index].style.display = "flex";
  };
  const nextDot = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    elem[index].style.backgroundColor = "#f4c71b";
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide);
    prevDot(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide);
    nextDot(dot, currentSlide, "slick-active");
  };

  const startSlide = (time = 2000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };
  gallerySlider.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    if (!target.matches('.span-prev img, .span-prev, .span-next, .span-next img, .gallery-slider .slider-dots li button ')) {
      return;
    }
    prevSlide(slide, currentSlide);
    prevDot(dot, currentSlide, 'slick-active');
    if (target.matches('.span-next, .span-next img')) {
      currentSlide++;
    } else if (target.matches('.span-prev, .span-prev img')) {
      currentSlide--;
    } else if (target.matches('.gallery-slider .slider-dots li button')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide);
    nextDot(dot, currentSlide, 'slick-active');

  });

  gallerySlider.addEventListener('mouseover', event => {
    if (event.target.closest('.gallery-slider .slide') ||
      event.target.matches('.slider-dots li button, .span-prev img, .span-prev, .span-next, .span-next img')) {
      stopSlide();
    }
  });

  gallerySlider.addEventListener('mouseout', event => {
    if (event.target.closest('.gallery-slider .slide') ||
      event.target.matches('.slider-dots li button, .span-prev img, .span-prev, .span-next, .span-next img')) {
      startSlide();
    }
  });

  startSlide(2000);
};

export default gallerySlider;