const images = [
  "/images/welcome/welcomepng1.png",
  "/images/welcome/welcomepng2.png",
  "/images/welcome/welcomepng3.png",
  "/images/welcome/welcomepng4.png",
  "/images/welcome/welcomepng5.png",
  "/images/welcome/welcomepng6.png",
  "/images/welcome/welcomepng7.png",
  "/images/welcome/welcomepng8.png"
];

function setRandomImage() {
  const img = document.getElementById("welcomeImage");
  if (!img) return;

  const randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
}

setRandomImage();
