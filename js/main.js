let links = document.getElementsByClassName("links")[0];
let list = document.querySelectorAll("ul")[0];
let icon = document.querySelector(".icon span:nth-child(2)");

links.addEventListener("click", function () {
  list.classList.toggle("show-menu");
  icon.classList.toggle("full-width");
});

//scroll up
let btnScrool = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    btnScrool.classList.add("show");
  } else {
    btnScrool.classList.remove("show");
  }
};
btnScrool.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
