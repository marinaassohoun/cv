console.log("Bienvenue !");

const app = {
  init: function () {
    // skills.init();
    theme.init();
    // about.init();
    nav.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
