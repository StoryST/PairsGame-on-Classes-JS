export function cn(container = 'div', cls = [], id = '', atr = {}, content = '') {

  const element = document.createElement(container);
  element.classList.add(...cls);
  if (id !== '') {
    element.id = id;
  }
  Object.keys(atr).map((key) => {
    element.setAttribute(key, atr[key]);
  });
  element.textContent = content;

  return element;
};
