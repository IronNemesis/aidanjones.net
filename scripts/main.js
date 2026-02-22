const images = [
  "/images/welcome/welcome1.jpg",
  "/images/welcome/welcome2.jpg",
  "/images/welcome/welcome3.jpg"
];

function setRandomImage() {
  const img = document.getElementById("welcomeImage");
  if (!img) return;

  const randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
}

setRandomImage();
