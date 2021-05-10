

const backToTopButton = document.querySelector("#style-back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) { // Show backToTopButton
    backToTopButton.style.opacity = "10";
}else{
    backToTopButton.style.opacity = "0";
}}