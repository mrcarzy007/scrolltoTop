const scrollTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
