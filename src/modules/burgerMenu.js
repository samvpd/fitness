const burgerMenu = () => {
  const menuButton = document.querySelector(".menu-button"),
    topMenu = document.querySelector(".top-menu"),
    popup = document.querySelector(".popup-menu"),
    top = topMenu.getBoundingClientRect().top;


  window.addEventListener('scroll', () => {
    const width = document.documentElement.clientWidth;
    const height = pageYOffset;
    if (width < 768 && top < height) {
      topMenu.style.position = "fixed";
    } else {
      topMenu.style.position = "";
    }
  });
  menuButton.addEventListener("click", event => {
    const target = event.target;
    if (target.closest("img")) {
      popup.style.display = "flex";
    }
  });
  popup.addEventListener("click", event => {
    const target = event.target;
    if (target.closest("img") || target.closest("a")) {
      popup.style.display = "none";
    }
  });
};

export default burgerMenu;