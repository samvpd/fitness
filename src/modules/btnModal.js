const btnModal = () => {
  const headerMain = document.querySelector(".header-main"),
    popup = document.querySelector("#callback_form");

  headerMain.addEventListener("click", event => {
    const target = event.target;
    if (target.closest(".callback-btn")) {
      popup.style.display = "block";
    }
  });
  popup.addEventListener("click", event => {
    let target = event.target;
    if (target.classList.contains("close-icon")) {
      popup.style.display = "none";
    } else {
      target = target.closest(".form-content");
    }
    if (!target) {
      popup.style.display = "none";
    }
  });
};

export default btnModal;