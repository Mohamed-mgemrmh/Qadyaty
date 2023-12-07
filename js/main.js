// decleration
let landing = document.querySelector(".landing");
let link = document.querySelectorAll(".link");
let icon = document.querySelector(".icon");
let firstXClass = document.querySelector(".first-span");
let secondXClass = document.querySelector(".second-span");
let thirdXClass = document.querySelector(".third-span");
let downMenu = document.querySelector(".down-menu");
let preloader = document.querySelector(".pre-loader");
let bodyClass = document.querySelector("body");
var counter = 1;


setInterval(() => {
  let checker = document.getElementById("radio" + counter);
  checker.checked = true;
  counter++;
  if (counter > 7) {
    counter = 1;
  }
}, 4000);


icon.onclick = () => {
  firstXClass.classList.toggle("first-x-class");
  secondXClass.classList.toggle("second-x-class");
  thirdXClass.classList.toggle("third-x-class");
  downMenu.classList.toggle("down-menu-clicked");
  downMenu.classList.toggle("down-menu-small-clicked");
};

link.forEach((ele) => {
  remove(ele);
});

remove(landing);


if (window.location.href.includes('#')) {
  preloader.classList.add('none');
  bodyClass.classList.add("visible")
} else {
  preloaderFunction();
  animtaion();
}

// functions 

function preloaderFunction() {
  setTimeout(() => {
    preloader.classList.add('none');
    
    if(preloader.classList.contains('none')) {
      bodyClass.classList.add("visible");
    }
  }, 2900);
}
function remove(ele) {
  ele.onclick = () => {
    firstXClass.classList.remove("first-x-class");
    secondXClass.classList.remove("second-x-class");
    thirdXClass.classList.remove("third-x-class");
    downMenu.classList.remove("down-menu-clicked");
    downMenu.classList.remove("down-menu-small-clicked");
  };
}
function animtaion() {
gsap.from(".header", { duration: 1, y: "-100%", ease: "slow", delay: 2.9 });
gsap.from(".animate", { duration: 1, opacity: 0, delay: 3.9, stagger: 0.3 });
gsap.from(".landing-text", { duration: 1.8, x: "100vw", delay: 4.9 });
gsap.from(".landing-main", {
  duration: 1,
  delay: 6.7,
  opacity: 0,
  ease: "bounce",
});
}
