//NAV ANIMATIONS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//HOME BUTTONS  
const cvBtn = document.querySelector("#cv-btn");
cvBtn.addEventListener('click', () => {
  let cvUrl = './assets/CV.es.NicolasQuiroga.25.pdf';
  let newTab = window.open(cvUrl);
});


const gitBtn = document.querySelector("#git-btn");
gitBtn.addEventListener('click', () => {
  let gitUrl = 'https://github.com/nicolasquirogadev';
  let newTab = window.open(gitUrl);
});

const linkedinBtn = document.querySelector("#linkedin-btn");
linkedinBtn.addEventListener('click', () => {
  let linkedinUrl = 'https://www.linkedin.com/in/nicolasquiroga1/';
  let newTab = window.open(linkedinUrl);
});

//PROJECT BUTTONS

//PROJECT 1
const project1git = document.getElementById("project1-git-btn");
project1git.addEventListener('click', () => {
  let a = 'https://github.com/nicolasquirogadev/JR-landingpage';
  let newTab = window.open(a);
});

const project1live = document.getElementById("project1-live-btn");
project1live.addEventListener('click', () => {
  let a = 'https://nicolasquirogadev.github.io/JR-landingpage/';
  let newTab = window.open(a);
});

//PROJECT 2
const project2git = document.getElementById("project2-git-btn");
project2git.addEventListener('click', () => {
  let a = 'https://github.com/nicolasquirogadev/blackJack21';
  let newTab = window.open(a);
});

const project2live = document.getElementById("project2-live-btn");
project2live.addEventListener('click', () => {
  let a = 'https://nicolasquirogadev.github.io/blackJack21/';
  let newTab = window.open(a);
});