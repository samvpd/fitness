const giftModal = () => {
  const body = document.querySelector("body"),
    popup = document.querySelector("#gift");

  const handlerModal = () => {
    body.addEventListener("click", event => {
      const target = event.target;
      if (target.closest(".fixed-gift")) {
        popup.style.display = "block";
        target.closest("img").style.display = "none";
      }
    });
    popup.addEventListener("click", event => {
      let target = event.target;
      if (target.classList.contains("close-icon") || target.classList.contains("close-btn")) {
        popup.style.display = "none";
      } else {
        target = target.closest(".form-content");
      }
      if (!target) {
        popup.style.display = "none";
      }
    });
  };
  handlerModal();
};

export default giftModal;