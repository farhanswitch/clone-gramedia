let index = 0;
let isOpen = false;
const prevButton = document.querySelector(".carousel .prev");
const nextButton = document.querySelector(".carousel .next");
const inner = document.querySelector(".carousel .inner");
const categoryBtn = document.getElementById("categoryBtn");
const categoriesSection = document.querySelector(".categories");

const nextItem = () => {
  index < 4 ? (index += 1) : (index = 0);
  inner.style.transform = `translateX(${index * -101}%)`;
};
const prevItem = () => {
  index > 0 ? (index -= 1) : (index = 4);
  inner.style.transform = `translateX(${index * -101}%)`;
};
const toggleHideShowCategories = () => {
  isOpen
    ? (categoriesSection.style.display = "none") && (isOpen = !isOpen)
    : (categoriesSection.style.display = "block") && (isOpen = !isOpen);
};

prevButton.addEventListener("click", prevItem);
nextButton.addEventListener("click", nextItem);
categoryBtn.addEventListener("click", toggleHideShowCategories);
