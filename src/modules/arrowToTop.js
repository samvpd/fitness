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
  document.body.addEventListener('click', event => {
    const target = event.target,
      scrollLink = target.closest('.scroll'),
      toTop = target.closest('#totop');

    if (scrollLink) {
      event.preventDefault();
      const selector = target.href.split('#');
      window.scroll({
        left: 0,
        top: document.querySelector(`#${selector[1]}`).offsetTop,
        behavior: 'smooth'
      });
    }

    if (toTop) {
      event.preventDefault();
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  });
};

export default arrowToTop;