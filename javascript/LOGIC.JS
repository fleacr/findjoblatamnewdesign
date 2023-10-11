function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }

  const bankAccounts = document.getElementById('bank-accounts');

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

bankAccounts.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - bankAccounts.offsetLeft;
  startY = e.pageY - bankAccounts.offsetTop;
  scrollLeft = bankAccounts.scrollLeft;
  scrollTop = bankAccounts.scrollTop;
  bankAccounts.style.cursor = 'grabbing';
});

bankAccounts.addEventListener('mouseleave', () => {
  isDown = false;
  bankAccounts.style.cursor = 'grab';
});

bankAccounts.addEventListener('mouseup', () => {
  isDown = false;
  bankAccounts.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - bankAccounts.offsetLeft;
  const y = e.pageY - bankAccounts.offsetTop;
  const walkX = (x - startX) * 1; 
  const walkY = (y - startY) * 1; 
  bankAccounts.scrollLeft = scrollLeft - walkX;
  bankAccounts.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById('action-button--previous');
const scrollRightButton = document.getElementById('action-button--next');

scrollLeftButton.addEventListener('click', () => {
    bankAccounts.scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    bankAccounts.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
    });
});

bankAccounts.addEventListener('scroll', (e) => {
  const position = bankAccounts.scrollLeft;
  if (position === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (
    Math.round(position) === 
    bankAccounts.scrollWidth - bankAccounts.clientWidth
  ) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});

/* Artificial Intelligence Carrousel */

const scrollLeftButtonAI = document.getElementById('action-button--previousAI');
const scrollRightButtonAI = document.getElementById('action-button--nextAI');
const artificialIntelligence = document.getElementById('artificial-intelligence');

let isDownAI = false;
let startXAI;
let startYAI;
let scrollLeftAI;
let scrollTopAI;

artificialIntelligence.addEventListener('mousedown', (e) => {
  isDownAI = true;
  startXAI = e.pageX - artificialIntelligence.offsetLeft;
  startYAI = e.pageY - artificialIntelligence.offsetTop;
  scrollLeftAI = artificialIntelligence.scrollLeft;
  scrollTopAI = artificialIntelligence.scrollTop;
  artificialIntelligence.style.cursor = 'grabbing';
});

artificialIntelligence.addEventListener('mouseleave', () => {
  isDownAI = false;
  artificialIntelligence.style.cursor = 'grab';
});

artificialIntelligence.addEventListener('mouseup', () => {
  isDownAI = false;
  artificialIntelligence.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDownAI) return;
  e.preventDefault();
  const x = e.pageX - artificialIntelligence.offsetLeft;
  const y = e.pageY - artificialIntelligence.offsetTop;
  const walkXAI = (x - startX) * 1; 
  const walkYAI = (y - startY) * 1; 
  artificialIntelligence.scrollLeft = scrollLeft - walkXAI;
  artificialIntelligence.scrollTop = scrollTop - walkYAI;
});

scrollLeftButtonAI.addEventListener('click', () => {
  artificialIntelligence.scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
    });
});

scrollRightButtonAI.addEventListener('click', () => {
  artificialIntelligence.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
    });
});

artificialIntelligence.addEventListener('scroll', (e) => {
  const position = artificialIntelligence.scrollLeft;
  if (position === 0) {
    scrollLeftButtonAI.disabled = true;
  } else {
    scrollLeftButtonAI.disabled = false;
  }

  if (
    Math.round(position) === 
    artificialIntelligence.scrollWidth - artificialIntelligence.clientWidth
  ) {
    scrollRightButtonAI.disabled = true;
  } else {
    scrollRightButtonAI.disabled = false;
  }
});