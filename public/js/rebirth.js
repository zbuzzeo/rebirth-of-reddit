'use strict';
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                          CARD SETUP
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function rebirthModule() {

  return {

  }
}

(function () {
  console.log('hello world!');
  const cardContainer = document.querySelector('#cardContainer');

  const makeElement = (parent, type, className, content = '') => {
    const element = document.createElement(type);
    element.className = className;
    element.innerHTML = content;
    parent.appendChild(element);
  }

  const generateContainers = (amount) => {
    for (let i = 1; i <= amount; i++) {
      makeElement(cardContainer, 'div', 'cardBox');
    }
  }

  const formatCards = () => {
    const cardBoxes = document.querySelectorAll('.cardBox');
    
    cardBoxes.forEach(box => {
      makeElement(box, 'img', 'postThumbnail');
      makeElement(box, 'div', 'postTitle');
      makeElement(box, 'div', 'postDetails');
      makeElement(box, 'div', 'postPreview');
    });
  }

  generateContainers(24);
  formatCards();
})();
