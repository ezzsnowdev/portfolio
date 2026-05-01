const icon = document.querySelector("#hamburger-icon");
const mobileList = document.querySelector("#nav-list-mobile");

function menuToggle(e) {
  // if (icon.classList.contains("open")) {
  //   icon.classList.remove("open");
  //   mobileList.classList.remove("open");
  // } else {
  //   icon.classList.add("open");
  //   mobileList.classList.add("open");
  // }

  icon.classList.toggle("open");
  mobileList.classList.toggle("open");
}

icon.addEventListener("click", menuToggle);
