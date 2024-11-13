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

const cvBtn = document.querySelector("#cv-btn");
cvBtn.addEventListener('click', () => {
  let cvUrl = './assets/cv.pdf';
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