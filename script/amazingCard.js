import Card from "./card.js";

export default class AmazingCard extends Card {

  constructor(container, count, cardNumber, flip) {
    super(container, count, cardNumber, flip);

  }

  set cardNumber(value) {

    const img = document.createElement('img');
    img.classList.add('card-img');
    img.src = `./img/${value}.jpg`;
    this.img = img;
    this._cardNumber = value;

    img.onerror = () => {
      img.src = `./img/error.jpg`;
      // throw new TypeError('Изображение не загрузилось');
    }
  }

  get cardNumber() {
    return this._cardNumber;
  }

  createElement() {
    super.createElement();
    this.card.textContent = '';
    this.card.append(this.img);
  }
}


