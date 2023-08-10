console.log("Je vous souhaite un bon visionnage !");
/***Change  */
const theme = {
  init: function () {
    const themeDark = document.getElementById("theme__icon");
    themeDark.addEventListener("click", theme.handleThemeClick);
  },

  handleThemeClick: function (evt) {
    evt.preventDefault();
    const bodyElement = document.querySelector("body");
    console.log(bodyElement);
    bodyElement.classList.toggle("darkMode");
  },
};
