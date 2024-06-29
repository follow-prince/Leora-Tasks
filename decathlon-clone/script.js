// =======Navigation menu start===========
nav = {
  config: {
    body: "body",
    menu_list: ".all-menu",
  },
  qs: function (elem) {
    return document.querySelector(elem);
  },
  handleMenu: function () {
    const self = this;
    const body = self.qs(self.config.body);
    const menu_list = self.qs(self.config.menu_list);
    menu_list.addEventListener("click", function () {
      body.classList.toggle("is--active");
    });
  },
  init: function () {
    const self = this;
    self.handleMenu();
  },
};
nav.init();
// =======Navigation menu end===========

// ==========TAB List Collection Start=========================
const tabs = document.querySelectorAll(".navtab");
const contents = document.querySelectorAll(".content");
const underline = document.querySelector(".underline");

function updateUnderline() {
  const activeTab = document.querySelector(".navtab.active");
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.getAttribute("data-target");
    contents.forEach((content) => {
      if (content.id === target) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
    updateUnderline();
  });
});

window.addEventListener("resize", updateUnderline);
updateUnderline();
// ==========TAB List Collection Stop=========================
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#productSider-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".productSider-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}
