import { cn } from "./core.js";

export default class Card {
  _open = false;
  _success = false;

  constructor(container, count, cardNumber, flip) {
    this.listItem = null;
    this.card = null;
    this.container = container;
    this.count = count;
    this.cardNumber = cardNumber;
    this.displayNumber = this.cardNumber;
    this.flip = flip;
    this.createElement();
  }

  set cardNumber(value) {
    this._cardNumber = value;
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set open(value) {
    this._open = value;
    value ? this.card.classList.add('is-open') : this.card.classList.remove('is-open');
  }

  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value
    value ? this.card.classList.add('is-pair') : this.card.classList.remove('is-pair');
  }

  get success() {
    return this._succsess;
  }

  set locked(value) {
    this._locked = value;
  }

  createElement() {
    this.listItem = cn('li', ['list__item'], '', { 'style': `width: calc(100% / ${this.count} - 30px)` }, '');
    this.card = cn('article', ['list__card'], '', {}, this.displayNumber);
    this.card.addEventListener('click', () => {
      if (!this.open && !this.success) {
        this.open = true;
        this.flip(this);
      }
    });

    this.listItem.append(this.card);
    this.container.append(this.listItem);
  }
}


