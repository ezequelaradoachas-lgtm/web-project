function showLove() {
  document.getElementById("message").style.display = "block";
}

// Floating hearts effect
const heartsContainer = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
