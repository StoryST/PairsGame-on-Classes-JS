import initial from "./script/vars.js";
import Card from "./script/card.js";
import AmazingCard from "./script/amazingCard.js";

(() => {
const {
  title,
  inputGroup,
  input,
  inputForm,
  list,
  modal,
  modalBtn
} = initial();

  let numArr = [];
  let countCard;
  let firstCard = null;
  let secondCard = null;

  inputForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const inputNum = Number(input.value);
    countCard = (inputNum % 2 == 0 && inputNum >= 2 && inputNum <= 10) ? inputNum : 4;
    input.value = '';
    startGame(countCard);
    timer();
  });

  function timer() {
    setTimeout(() => {
      gameOver();
    }, 60000)
  };

  function startGame(count) {
    inputGroup.classList.add('visually-hidden');
    title.classList.add('visually-hidden');
    createNumbersArray(count);
    shuffle(numArr);

    for (let i = 0; i < numArr.length; i++) {
      let card = new AmazingCard(list, count, numArr[i], flipCard);
    }
  };

  // создаем список
  function createNumbersArray(count) {
    for (let num = 1; num <= (count ** 2) / 2; num++) {
      numArr.push(num);
      numArr.push(num);
    }
    return numArr;
  }

  // премешиваем список
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let tmp = arr[i];
      let rnd = Math.round(Math.random() * (i + 1));
      arr[i] = arr[rnd];
      arr[rnd] = tmp;
    }
    return arr;
  }

  function flipCard(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber !== secondCard.cardNumber) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard === null) {
      firstCard = card;
    } else {
      if (secondCard === null) {
        secondCard = card;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber == secondCard.cardNumber) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (document.querySelectorAll('.list__card').length === document.querySelectorAll('.list__card.is-open').length) {

      setTimeout(() => {
        gameOver();
      }, 1500);
    }
  }

  function gameOver() {
    modal.classList.remove('visually-hidden');
    modalBtn.addEventListener('click', function () {
      document.querySelectorAll('.list__item').forEach(e => e.remove());
      inputGroup.classList.remove('visually-hidden');
      title.classList.remove('visually-hidden');
      countCard = 0;
      numArr = [];
      modal.classList.add('visually-hidden');
    });
  }

})();
