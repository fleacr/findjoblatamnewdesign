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

/* Job Portals Carrousel */

const scrollLeftButtonJP = document.getElementById('action-button--previousJP');
const scrollRightButtonJP = document.getElementById('action-button--nextJP');
const jobPortals = document.getElementById('job-portals');

let isDownJP = false;
let startXJP;
let startYJP;
let scrollLeftJP;
let scrollTopJP;

jobPortals.addEventListener('mousedown', (e) => {
  isDownJP = true;
  startXJP = e.pageX - jobPortals.offsetLeft;
  startYJP = e.pageY - jobPortals.offsetTop;
  scrollLeftJP = jobPortals.scrollLeft;
  scrollTopJP = jobPortals.scrollTop;
  jobPortals.style.cursor = 'grabbing';
});

jobPortals.addEventListener('mouseleave', () => {
  isDownJP = false;
  jobPortals.style.cursor = 'grab';
});

jobPortals.addEventListener('mouseup', () => {
  isDownJP = false;
  jobPortals.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDownJP) return;
  e.preventDefault();
  const x = e.pageX - jobPortals.offsetLeft;
  const y = e.pageY - jobPortals.offsetTop;
  const walkXJP = (x - startX) * 1; 
  const walkYJP = (y - startY) * 1; 
  jobPortals.scrollLeft = scrollLeft - walkXJP;
  jobPortals.scrollTop = scrollTop - walkYJP;
});

scrollLeftButtonJP.addEventListener('click', () => {
  jobPortals.scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
    });
});

scrollRightButtonJP.addEventListener('click', () => {
  jobPortals.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
    });
});

jobPortals.addEventListener('scroll', (e) => {
  const position = jobPortals.scrollLeft;
  if (position === 0) {
    scrollLeftButtonJP.disabled = true;
  } else {
    scrollLeftButtonJP.disabled = false;
  }

  if (
    Math.round(position) === 
    jobPortals.scrollWidth - jobPortals.clientWidth
  ) {
    scrollRightButtonJP.disabled = true;
  } else {
    scrollRightButtonJP.disabled = false;
  }
});

/* English Carrousel */

const scrollLeftButtonENG = document.getElementById('action-button--previousENG');
const scrollRightButtonENG = document.getElementById('action-button--nextENG');
const english = document.getElementById('english');

let isDownENG = false;
let startXENG;
let startYENG;
let scrollLeftENG;
let scrollTopENG;

english.addEventListener('mousedown', (e) => {
  isDownENG = true;
  startXENG = e.pageX - english.offsetLeft;
  startYENG = e.pageY - english.offsetTop;
  scrollLeftENG = english.scrollLeft;
  scrollTopENG = english.scrollTop;
  english.style.cursor = 'grabbing';
});

english.addEventListener('mouseleave', () => {
  isDownENG = false;
  english.style.cursor = 'grab';
});

english.addEventListener('mouseup', () => {
  isDownENG = false;
  english.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDownENG) return;
  e.preventDefault();
  const x = e.pageX - english.offsetLeft;
  const y = e.pageY - english.offsetTop;
  const walkXENG = (x - startX) * 1; 
  const walkYENG = (y - startY) * 1; 
  english.scrollLeft = scrollLeft - walkXENG;
  english.scrollTop = scrollTop - walkYENG;
});

scrollLeftButtonENG.addEventListener('click', () => {
  english.scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
    });
});

scrollRightButtonENG.addEventListener('click', () => {
  english.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
    });
});

english.addEventListener('scroll', (e) => {
  const position = english.scrollLeft;
  if (position === 0) {
    scrollLeftButtonENG.disabled = true;
  } else {
    scrollLeftButtonENG.disabled = false;
  }

  if (
    Math.round(position) === 
    english.scrollWidth - english.clientWidth
  ) {
    scrollRightButtonENG.disabled = true;
  } else {
    scrollRightButtonENG.disabled = false;
  }
});

/* Graphic Design Carrousel */

const scrollLeftButtonGRA = document.getElementById('action-button--previousGRA');
const scrollRightButtonGRA = document.getElementById('action-button--nextGRA');
const graphicDesign = document.getElementById('graphic-design');

let isDownGRA = false;
let startXGRA;
let startYGRA;
let scrollLeftGRA;
let scrollTopGRA;

graphicDesign.addEventListener('mousedown', (e) => {
  isDownGRA = true;
  startXGRA = e.pageX - graphicDesign.offsetLeft;
  startYGRA = e.pageY - graphicDesign.offsetTop;
  scrollLeftGRA = graphicDesign.scrollLeft;
  scrollTopGRA = graphicDesign.scrollTop;
  graphicDesign.style.cursor = 'grabbing';
});

graphicDesign.addEventListener('mouseleave', () => {
  isDownGRA = false;
  graphicDesign.style.cursor = 'grab';
});

graphicDesign.addEventListener('mouseup', () => {
  isDownGRA = false;
  graphicDesign.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDownGRA) return;
  e.preventDefault();
  const x = e.pageX - graphicDesign.offsetLeft;
  const y = e.pageY - graphicDesign.offsetTop;
  const walkXGRA = (x - startX) * 1; 
  const walkYGRA = (y - startY) * 1; 
  graphicDesign.scrollLeft = scrollLeft - walkXGRA;
  graphicDesign.scrollTop = scrollTop - walkYGRA;
});

scrollLeftButtonGRA.addEventListener('click', () => {
  graphicDesign.scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
    });
});

scrollRightButtonGRA.addEventListener('click', () => {
  graphicDesign.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
    });
});

graphicDesign.addEventListener('scroll', (e) => {
  const position = graphicDesign.scrollLeft;
  if (position === 0) {
    scrollLeftButtonGRA.disabled = true;
  } else {
    scrollLeftButtonGRA.disabled = false;
  }

  if (
    Math.round(position) === 
    graphicDesign.scrollWidth - graphicDesign.clientWidth
  ) {
    scrollRightButtonGRA.disabled = true;
  } else {
    scrollRightButtonGRA.disabled = false;
  }
});
