const sendForm = () => {

  const errorMessage = "Что-то пошло не так...",
    loadMessage = "Загрузка...",
    checkMessage = "Необходимо заполнить все поля!";

  const form = document.querySelectorAll("form"),
    statusMessage = document.createElement("div"),
    popUpMessage = document.querySelector("#thanks"),
    formContent = popUpMessage.querySelector(".form-content"),
    p = formContent.querySelector("p"),
    h4 = formContent.querySelector("h4"),
    footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
    footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo'),
    clubs = document.querySelector('.choose-club'),
    mozLabel = clubs.querySelector(`label[for="${footerLetoMozaika.id}"]`),
    shelkLabel = clubs.querySelector(`label[for="${footerLetoSchelkovo.id}"]`);
  const cardOrder = document.querySelector("#card_order"),
    mozCardLabel = cardOrder.querySelector("input[id=card_leto_mozaika]"),
    schelCardLabel = cardOrder.querySelector("input[id=card_leto_schelkovo]");
  const formName = cardOrder.querySelector("input[name=form_name]");

  statusMessage.style.cssText = `font-size: 1.5rem; color: red;`;
  const validatorInputs = () => {
    form.forEach(item => {
      item.querySelectorAll("input").forEach(elem => {
        const attributeName = elem.getAttribute("name");
        elem.addEventListener("input", () => {
          if (attributeName === "phone") {
            elem.value = elem.value.replace(/[^\d+]/g, '');
          } else if (attributeName === "name") {
            elem.value = elem.value.replace(/[^а-яА-ЯёЁ]+$/ig, "");
          }
        });
      });
    });
  };
  validatorInputs();

  const checkedClubs = (mozClub, schelClub) => {

    const mozData = {
      name: mozLabel.querySelector('h6').textContent,
      adres: mozLabel.querySelector('p').textContent
    };
    const schelData = {
      name: shelkLabel.querySelector('h6').textContent,
      adres: shelkLabel.querySelector('p').textContent
    };

    mozClub.setAttribute("checked", "");
    mozClub.setAttribute("value", `${JSON.stringify(mozData)}`);

    mozClub.addEventListener('change', () => {
      mozClub.setAttribute('checked', '');
      if (mozClub && !mozClub.checked) {
        p.textContent = checkMessage;
        h4.textContent = "Oops!";
        popUpMessage.style.display = "block";
        setTimeout(() => {
          statusMessage.textContent = '';
          popUpMessage.style.display = "none";
        }, 5000);
        return;
      } else {
        mozClub.setAttribute('value', `${JSON.stringify(mozData)}`);
      }
      schelClub.removeAttribute('checked');
    });

    schelClub.addEventListener('change', () => {
      schelClub.setAttribute('checked', '');
      if (schelClub && !schelClub.checked) {
        p.textContent = checkMessage;
        h4.textContent = "Oops!";
        popUpMessage.style.display = "block";
        setTimeout(() => {
          statusMessage.textContent = '';
          popUpMessage.style.display = "none";
        }, 5000);
        return;
      } else {
        schelClub.setAttribute('value', `${JSON.stringify(schelData)}`);
      }
      mozClub.removeAttribute('checked');
    });
  };

  checkedClubs(footerLetoMozaika, footerLetoSchelkovo);
  checkedClubs(mozCardLabel, schelCardLabel);
  form.forEach(item => {
    const checkBox = item.querySelector("input[type=checkbox]"),
      inputsForm = item.querySelectorAll('input'),
      inputText = item.querySelector('input[type="text"]'),
      inputTel = item.querySelector('input[type="tel"]');

    inputsForm.forEach(item => {
      if (item.hasAttribute('required')) {
        item.removeAttribute('required');
        item.style.outline = 'none';
      }
    });

    item.addEventListener("submit", event => {
      event.preventDefault();
      item.append(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(item);

      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      const formName = body.form_name;
      if (!body.form_name) {
        body.form_name = formName;
      }
      console.log(body.form_name);
      if ((checkBox && !checkBox.checked) || ((inputText && inputText.value === '') || inputTel.value === '')) {
        p.textContent = checkMessage;
        h4.textContent = "Oops!";
        popUpMessage.style.display = "block";
        setTimeout(() => {
          statusMessage.textContent = '';
          popUpMessage.style.display = "none";
        }, 5000);
        return;
      } else {
        p.textContent = "Ваша заявка отправлена.Мы свяжемся с вами в ближайшее время.";
        h4.textContent = "Спасибо!";
        popUpMessage.style.display = "block";
      }

      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error("status network not 200");
          }
          statusMessage.textContent = "";
        })
        .catch(error => {
          p.textContent = errorMessage;
          h4.textContent = "Oops!";
          popUpMessage.style.display = "block";
          statusMessage.textContent = "";
          console.error(error);
        })
        .finally(() => {
          item.querySelectorAll("input").forEach(elem => {
            elem.value = "";
            elem.checked = false;
          });
        });
    });
  });

  const postData = body => fetch("./server.php", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  popUpMessage.addEventListener("click", event => {
    let target = event.target;
    if (target.classList.contains("close_icon") || target.classList.contains("close-btn")) {
      popUpMessage.style.display = "none";
      statusMessage.textContent = '';
    } else {
      target = target.closest(".form-content");
    }
    if (!target) {
      popUpMessage.style.display = "none";
      statusMessage.textContent = '';
    }
  });
};

export default sendForm;