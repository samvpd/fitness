const dropMenu = () => {
  const clubsList = document.querySelector(".clubs-list"),
    headerMain = document.querySelector(".header-main"),
    ul = clubsList.querySelector("ul");
  ul.style.display = "none";

  headerMain.addEventListener("click", event => {
    let target = event.target;
    if (target.closest(".club-select") && ul.style.display === "none") {
      ul.style.display = "block";
      return;
    } else if (!target.closest(".club-select")) {
      ul.style.display = "none";
    }
  });
};

export default dropMenu;