let links = document.getElementsByClassName("links")[0];
let list = document.querySelectorAll("ul")[0];

links.addEventListener("click", function () {
  list.classList.toggle("show-menu"); 
});
