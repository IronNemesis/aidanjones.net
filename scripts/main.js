const greetingImages = [
  "/images/greeting/greet1.png",
  "/images/greeting/greet2.png",
  "/images/greeting/greet3.png"
];

const welcomeImages = [
  "/images/welcome/welcomepng1.png",
  "/images/welcome/welcomepng2.png",
  "/images/welcome/welcomepng3.png",
  "/images/welcome/welcomepng4.png",
  "/images/welcome/welcomepng5.png",
  "/images/welcome/welcomepng6.png",
  "/images/welcome/welcomepng7.png",
  "/images/welcome/welcomepng8.png"
];

function setRandomImage(elementId, imageArray) {
  const el = document.getElementById(elementId);
  if (!el || imageArray.length === 0) return;

  const randomIndex = Math.floor(Math.random() * imageArray.length);
  el.src = imageArray[randomIndex];
}

window.addEventListener("DOMContentLoaded", () => {
  setRandomImage("greetingImage", greetingImages);
  setRandomImage("welcomeImage", welcomeImages);
});
