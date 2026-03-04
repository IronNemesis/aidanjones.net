const greetingImages = [
  "/images/greeting/greetingpng1.png",
  "/images/greeting/greetingpng2.png",
  "/images/greeting/greetingpng3.png",
  "/images/greeting/greetingpng4.png",
  "/images/greeting/greetingpng5.png",
  "/images/greeting/greetingpng6.png",
  "/images/greeting/greetingpng7.png",
  "/images/greeting/greetingpng8.png",
  "/images/greeting/greetingpng9.png",
  "/images/greeting/greetingpng10.png"
];

const welcomeImages = [
  "/images/welcome/welcomepng1.png",
  "/images/welcome/welcomepng2.png",
  "/images/welcome/welcomepng3.png",
  "/images/welcome/welcomepng4.png",
  "/images/welcome/welcomepng5.png",
  "/images/welcome/welcomepng6.png",
  "/images/welcome/welcomepng7.png",
  "/images/welcome/welcomepng8.png",
  "/images/welcome/welcomepng9.png",
  "/images/welcome/welcomepng10.png",
  "/images/welcome/welcomepng11.png",
  "/images/welcome/welcomepng15.png",
  "/images/welcome/welcomepng12.png",
  "/images/welcome/welcomepng13.png",
  "/images/welcome/welcomepng14.png"
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
