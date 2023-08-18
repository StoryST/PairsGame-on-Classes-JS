export default function initial() {
  const title = document.querySelector('.title');
  const inputGroup = document.querySelector('.input-group');
  const input = document.querySelector('.form-control');
  const inputForm = document.querySelector('.input-group');
  const list = document.getElementById('cards-list');
  const modal = document.querySelector('.game-over');
  const modalBtn = modal.querySelector('.game-over__btn');

  return {
    title,
    inputGroup,
    input,
    inputForm,
    list,
    modal,
    modalBtn
  }
}


