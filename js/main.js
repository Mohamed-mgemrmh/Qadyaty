// landing page gsap animation;
gsap.from(".header", { duration: 1, y: "-100%", ease: "slow" });
gsap.from(".animate", { duration: 1, opacity: 0, delay: 1, stagger: 0.3 });
gsap.from(".landing-text", { duration: 1.8, x: "100vw", delay: 1.6 });
gsap.from(".landing-main", {
  duration: 1,
  delay: 3.6,
  opacity: 0,
  ease: "bounce",
});

// auto image slider
var counter = 1;
setInterval(() => {
  let checker = document.getElementById("radio" + counter);
  checker.checked = true;
  counter++;
  if (counter > 7) {
    counter = 1;
  }
}, 4000);

// burger menu
let landing = document.querySelector(".landing");
let link = document.querySelectorAll(".link");
let icon = document.querySelector(".icon");
let firstXClass = document.querySelector(".first-span");
let secondXClass = document.querySelector(".second-span");
let thirdXClass = document.querySelector(".third-span");
let downMenu = document.querySelector(".down-menu");

icon.onclick = () => {
  firstXClass.classList.toggle("first-x-class");
  secondXClass.classList.toggle("second-x-class");
  thirdXClass.classList.toggle("third-x-class");
  downMenu.classList.toggle("down-menu-clicked");
  downMenu.classList.toggle("down-menu-small-clicked");
};

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

function remove(ele) {
  ele.onclick = () => {
    firstXClass.classList.remove("first-x-class");
    secondXClass.classList.remove("second-x-class");
    thirdXClass.classList.remove("third-x-class");
    downMenu.classList.remove("down-menu-clicked");
    downMenu.classList.remove("down-menu-small-clicked");
  };
}
