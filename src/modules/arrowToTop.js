const arrowToTop = () => {
  const headSlider = document.querySelector(".head-slider"),
    arrow = document.querySelector("#totop"),
    bottom = headSlider.getBoundingClientRect().bottom;
  arrow.style.display = "none";

  window.addEventListener('scroll', () => {
    const height = pageYOffset;
    if (bottom < height) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
  });

};

export default arrowToTop;