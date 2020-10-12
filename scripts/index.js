var animation = window.bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: '../ChatBox_Bubble_svg.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  name: "Hello World", // Name for future reference. Optional.
});
animation.setSpeed(1.4);

const lottieElement = document.querySelector("#lottie");

lottieElement.addEventListener("mouseenter", event => {
  animation.play();
});

lottieElement.addEventListener("mouseleave", event => {
  animation.stop();
});