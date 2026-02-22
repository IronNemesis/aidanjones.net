const images = [
  "/images/welcome/welcome1.png",
  "/images/welcome/welcome2.png",
  "/images/welcome/welcome3.png"
];

function setRandomImage() {
  const img = document.getElementById("welcomeImage");
  if (!img) return;

  const randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
}

setRandomImage();
