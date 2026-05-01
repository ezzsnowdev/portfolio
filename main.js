const icon = document.querySelector("#hamburger-icon");
const mobileList = document.querySelector("#nav-list-mobile");

function menuToggle(e) {
  icon.classList.toggle("open");
  mobileList.classList.toggle("open");
}

icon.addEventListener("click", menuToggle);

let selectAllMobileNavList = document.querySelectorAll("#nav-bar-mobile ul li"); // nodelist

selectAllMobileNavList = Array.from(selectAllMobileNavList); // Now it will be js array

selectAllMobileNavList.forEach((item) => {
  item.addEventListener("click", menuToggle);
});

// show more projects
const showMoreBtn = document.querySelector("#projects .show-more");
const hiddenProjects = Array.from(
  document.querySelectorAll("#project-cards .card.hidden"),
);

showMoreBtn.addEventListener("click", () => {
  console.log(hiddenProjects);
  hiddenProjects.forEach((p) => p.classList.toggle("hidden"));
  if (showMoreBtn.textContent === "Show Less") {
    showMoreBtn.textContent = "Show More";
  } else {
    showMoreBtn.textContent = "Show Less";
  }
});

// Validation on Contact me

const form = document.querySelector(".form-cont");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page reload

  const name = document.querySelector(".form-cont #name").value;
  if (name === "") {
    alert("Please enter your name!");
  }

  // logic send to backend
  alert("Thanks your message has been submit!!");
});

// input event

// const inputEle = document.querySelector("#email-input");
// const inputStatEle = document.querySelector("#input-stat");

// inputEle.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   inputStatEle.innerHTML = "user keyDown on" + " " + e.key;
// });
