'use strict';
// const sampleTexts = require('../js/sampleTexts');
// const randomSample = sampleTexts.randomSample(sampleTexts.samples);

const sampleText = `Flax seed crackers burning man open-minded root chakra, Bay Area sun salutation blessed tie-dye chanting soulmate. Family constellation Whole Earth Catalog my brothers and sisters, deep tincture. Promoting positive change sound healing fluorescent lights all-encompassing, heartbeat of our ancestors east-west rawthentic self sacred ceremony Phish stevia. Reflexology tantra co-create, reprogramming your DNA mystic. Psychic vitamin-rich radiant, white sage agave. Namaste.`;

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
      makeElement(box, 'div', 'postThumbnail');
      makeElement(box, 'div', 'postTitle', sampleText);
      makeElement(box, 'div', 'postDetails', sampleText);
      makeElement(box, 'div', 'postPreview', sampleText);
    });
  }

  generateContainers(24);
  formatCards();
})();
