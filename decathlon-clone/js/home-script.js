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
