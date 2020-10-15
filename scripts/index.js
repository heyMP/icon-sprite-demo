// comment
const registerAnimation = (container, options = {}) => {
  const path = container.dataset.path;
  
  var animation = window.bodymovin.loadAnimation({
    container, // Required
    path, // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  });
  animation.setSpeed(2);
}

[...document.querySelectorAll("[data-lottie]")].forEach(el => {
  registerAnimation(el)
})