this.onload = (event) => {
  document.querySelector("body").classList.remove("preload");
};
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  for (entry of entries) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  }
}, appearOptions);

for (slide of sliders) {
  appearOnScroll.observe(slide);
}
