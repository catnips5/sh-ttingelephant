let score = 0;
let timeLeft = 10;
let gameInterval;

function startGame() {
  score = 0;
  timeLeft = 10;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  document.getElementById("end-message").textContent = "";
  document.getElementById("poop-btn").disabled = false;
  document.getElementById("start-btn").disabled = true;

  gameInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      endGame();
    }
  }, 1000);
}

function dropPoop() {
  score++;
  document.getElementById("score").textContent = score;

  const container = document.getElementById("poop-container");
  const poop = document.createElement("div");
  poop.classList.add("poop");
  poop.textContent = "💩";
  poop.style.left = `${Math.random() * 70 + 15}%`;
  container.appendChild(poop);

  setTimeout(() => {
    poop.remove();
  }, 3000);
}

function endGame() {
  document.getElementById("poop-btn").disabled = true;
  document.getElementById("start-btn").disabled = false;
  document.getElementById("end-message").textContent = `🎉 סיימת עם ${score} נקודות! נסה שוב?`;
}
