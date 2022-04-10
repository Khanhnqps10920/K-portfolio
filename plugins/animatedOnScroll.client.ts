import Vue from "vue";

const animatedOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach((entry) => {
      // If element is in view
      if (entry.isIntersecting) {
        // Add class 'enter'
        entry.target.classList.add("enter");
        // Unobserve element
        animateOnScrollObserver.unobserve(entry.target);
      }
    });
  }
);

Vue.directive("animate-on-scroll", {
  bind: (el) => {
    // Add 'before-enter' class
    el.classList.add("before-enter");
    // Observe element
    animatedOnScrollObserver.observe(el);
  },
});
