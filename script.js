const counter = document.querySelector("#counter");
let count = 0;
setInterval(() => {
  count++;
  counter.innerHTML = count + "%";
  if (count == 100) {
    counter.style.fontSize = "30px";
    gsap.to(".main", {
      translateY: "-100%",
    });
    document.body.style.overflow = "auto";
  }
}, 30);

console.log(document.body);

const roller = document.getElementById("roller");
const Button = document.getElementById("myButton");

roller.addEventListener("click", () => {
  console.log("clicked");
  Button.classList.toggle("toggleCircle");
  roller.classList.toggle("addBg");
});

let arrowDown1 = document.getElementById("arrow1");
arrowDown1.addEventListener("click", () => {
  arrowDown1.classList.toggle("rotate");
  console.log(answer1);
  answer1.classList.toggle("show");
});

let arrowDown2 = document.getElementById("arrow2");
arrowDown2.addEventListener("click", () => {
  arrowDown2.classList.toggle("rotate");
  answer2.classList.toggle("show");
});

let arrowDown3 = document.getElementById("arrow3");
arrowDown3.addEventListener("click", () => {
  arrowDown3.classList.toggle("rotate");
  answer3.classList.toggle("show");
});

let arrowDown4 = document.getElementById("arrow4");
arrowDown4.addEventListener("click", () => {
  arrowDown4.classList.toggle("rotate");
  answer4.classList.toggle("show");
});

let arrowDown5 = document.getElementById("arrow5");
arrowDown5.addEventListener("click", () => {
  arrowDown5.classList.toggle("rotate");
  answer5.classList.toggle("show");
});

let answer1 = document.getElementById("ans-1");
let answer2 = document.getElementById("ans-2");
let answer3 = document.getElementById("ans-3");
let answer4 = document.getElementById("ans-4");
let answer5 = document.getElementById("ans-5");

// Burger menu

const burgerMenu = document.getElementById("arrowDown");
// console.log(burgerMenu);
const close = document.getElementById("arrowUp");
// console.log(close);

const list = document.getElementById("list");

burgerMenu.addEventListener("click", () => {
  list.style.transform = "translateY(0px)";
});

close.addEventListener("click", () => {
  list.style.transform = "translateY(-700px)";
});

// gsap
