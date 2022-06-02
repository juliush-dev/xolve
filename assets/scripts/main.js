window.addEventListener("load", function () {
  //everything is fully loaded, don't use me if you can use DOMContentLoaded
  let menu = document.querySelector(".menu .material-icons");
  let presentation = document.querySelector(".presentation");
  let detailedView = document.querySelector(".detailed-view");
  menu.addEventListener("click", (ev) => {
    let presentationStyle = getComputedStyle(presentation);
    if (presentationStyle.getPropertyValue("display") === "none") {
      presentation.style.display = "grid";
      detailedView.style.display = "none";
    } else {
      presentation.style.display = "none";
      detailedView.style.display = "block";
    }
  });
});
