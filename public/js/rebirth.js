'use strict';
// const sampleTexts = require('../js/sampleTexts');
// const randomSample = sampleTexts.randomSample(sampleTexts.samples);

const sampleText = `Cleansing short-grain brown rice lingham tincture double rainbow tai chi chanting occupy henna tattoo, contact improv hexayurt. Gifting circle ganja feeling abandoned, juicy yerba matte sustainable. Leave no trace cold plunge lavender lucid dreaming, blue whale trust the process blessed. Solstice reproductive system manifestation, chia seeds non-attachment new moon surrender lentils beltane innate capacity. Be the change loving kindness reconnect sun salutation family constellation kapha imbalance, fertility awareness pranayama. Namaste.`;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                          CARD SETUP
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function rebirthModule() {
  const clearCards = () => {
    const cardBoxes = document.querySelectorAll('.cardBoxes');
    const thumbnails = document.querySelectorAll('.postThumbnail');
    const titles = document.querySelectorAll('.postTitle');
    const details = document.querySelectorAll('.postDetails');
    const preview = document.querySelectorAll('.postPreview');

    const selectors = [
      thumbnails,
      titles,
      details,
      previews
    ];

    thumbnails.forEach()

  }

  return {

  }
}

(function () {
  const cardContainer = document.querySelector('#cardContainer');
  const redditRequest = new XMLHttpRequest();

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

  generateContainers(26);
  formatCards();

  redditRequest.addEventListener('load', function () {
    const parsed = JSON.parse(this.responseText);
    const posts = parsed.data.children;
    const cardBoxes = document.querySelectorAll('.cardBox');    

    console.log(posts);

    for (let i = 0; i < posts.length; i++) {
      console.log(cardBoxes[i].children);
    }
    
    // 1. all the cards have to exist before i append stuff to them
    // 2. 

    // for (let i = 0; i < posts.length; i++) {
    //   const cardBoxes = document.querySelectorAll('.cardBox');
    //   makeElement(cardContainer, 'div', 'cardBox');
    //   makeElement(cardBoxes[i], 'diconst cardBoxes = document.querySelectorAll('.cardBox');v', 'postThumbnail');
    //   makeElement(cardBoxes[i], 'div', 'postTitle', posts[i].data['title']);
    //   makeElement(cardBoxes[i], 'div', 'postDetails', posts[i].data['author full name']);
    //   makeElement(cardBoxes[i], 'div', 'postPreview', posts[i].data['title']);
    // }

    // posts.forEach(post => {
    //   console.log(`BOX`);
    //   makeElement(cardContainer, 'div', 'cardBox');
    //   // makeElement(parent, 'div', 'postTitle', post.data.title);
      
    // });

    // posts.forEach(post => {
    //   makeElement(cardBoxes, 'div', 'postThumbnail');
    //   makeElement(cardBoxes, 'div', 'postTitle', post.data.title);
    //   makeElement(cardBoxes, 'div', 'postDetails', post.data['author full name']);
    //   makeElement(cardBoxes, 'div', 'postPreview', post.data.title)
    // });

    
  });
  redditRequest.open('GET', 'https://www.reddit.com/r/aww.json');
  redditRequest.send();
})();
