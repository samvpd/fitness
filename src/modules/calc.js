const calc = () => {
  const cardOrder = document.querySelector('#card_order'),
    input = cardOrder.querySelectorAll('input'),
    promo = document.querySelector('input[placeholder="Промокод"]'),
    timeMonthes = document.querySelector('.time'),
    checkShelkovo = document.getElementById('card_leto_schelkovo'),
    checkMozaika = document.getElementById('card_leto_mozaika');


  let period, priceTotal;

  if (timeMonthes) {
    period = timeMonthes.querySelectorAll('input[type="radio"]');
    priceTotal = document.getElementById('price-total');
    priceTotal.textContent = '1999';
  }

  input.forEach(item => {
    item.addEventListener('change', () => {
      if (checkMozaika && checkMozaika.checked) {
        period.forEach(item => {
          if (item.checked) {
            if (item.value === '1') {
              priceTotal.textContent = '1999';
            } else if (item.value === '6') {
              priceTotal.textContent = '9900';
            } else if (item.value === '9') {
              priceTotal.textContent = '13900';
            } else if (item.value === '12') {
              priceTotal.textContent = '19900';
            }
          }
        });
      }

      if (checkShelkovo && checkShelkovo.checked) {
        period.forEach(item => {
          if (item.checked) {
            if (item.value === '1') {
              priceTotal.textContent = '2999';
            } else if (item.value === '6') {
              priceTotal.textContent = '14990';
            } else if (item.value === '9') {
              priceTotal.textContent = '21990';
            } else if (item.value === '12') {
              priceTotal.textContent = '24990';
            }
          }
        });
      }

      if (promo && promo.value === 'ТЕЛО2020') {
        priceTotal.textContent -= Math.ceil((priceTotal.textContent * 0.3));
      }
    });
  });
};
export default calc;