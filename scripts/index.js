// comment
const registerAnimation = (container, options = {}) => {
  const path = container.dataset.path;
  
  var animation = window.bodymovin.loadAnimation({
    container, // Required
    path, // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
  });
  animation.setSpeed(2);

  container.addEventListener("mouseenter", event => {
    animation.play();
  });

  container.addEventListener("mouseleave", event => {
    animation.stop();
  });
}

[...document.querySelectorAll("[data-lottie]")].forEach(el => {
  registerAnimation(el)
})