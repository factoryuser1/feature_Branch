//create html elements
const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  element.className = className;
  element.innerText = text;
  return element;
};