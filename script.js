const generateStars = () => {
  const navbar = document.getElementById("navbar");
  
  // Alte Sterne entfernen
  const oldStars = document.querySelectorAll(".star");
  oldStars.forEach(star => star.remove());
const area = window.innerWidth * navbar.offsetHeight;

// Sternendichte dynamisch skalieren
let densityFactor;

if (window.innerWidth < 600) {
  densityFactor = 4000; // wenige Sterne auf kleinen Displays
} else if (window.innerWidth < 1200) {
  densityFactor = 2500; // mittlere Dichte
} else {
  densityFactor = 1500; // viele Sterne auf großen Bildschirmen
}

const numberOfStars = Math.floor(area / densityFactor);

  //const numberOfStars = Math.floor((window.innerWidth * navbar.offsetHeight) / 2000);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3 + 1; // 1px bis 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Zufällige Position innerhalb der Navbar
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Zufällige Animation-Dauer zwischen 2s und 6s
    star.style.animationDuration = `${Math.random() * 4 + 2}s`;

    navbar.appendChild(star);
  }
};

// Generieren beim Laden
window.addEventListener("load", generateStars);

// Optional: bei Resize neu generieren
window.addEventListener("resize", generateStars);
