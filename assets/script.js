

// DOM Elements
const flagImg = document.getElementById("flagImg");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const blankBtn = document.getElementById("blankBtn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");


// Game Variables
let score = 0;
let timeLeft = 15;
let timer;
let currentCountry = "";

// Sample Country Data (Using FlagCDN)
const countries = [
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Brazil", code: "br" },
  { name: "Japan", code: "jp" },
];
// ==============================
// Start Game
// ==============================

function startGame() {
  loadRandomFlag();
  guessInput.value = "";
  message.textContent = "";
}

// ==============================
// Load Random Flag
// ==============================

function loadRandomFlag() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  const country = countries[randomIndex];

  currentCountry = country.name;
  flagImg.src = `https://flagcdn.com/w320/${country.code}.png`;
}


// ==============================
// Check Answer
// ==============================

function checkAnswer() {
  const userGuess = guessInput.value.trim().toLowerCase();
  const correctAnswer = currentCountry.toLowerCase();

  if (userGuess === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    message.textContent = "✅ Correct!";
    message.className = "fw-semibold text-success";
  } else {
    message.textContent = "❌ Wrong! Try again.";
    message.className = "fw-semibold text-danger";
  }
}

// ==============================
// Event Listeners
// ==============================

submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", () => {
  startGame();
});

blankBtn.addEventListener("click", () => {
  guessInput.value = "";
  guessInput.focus();
});

guessInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});


// ==============================
// Initialize Game On Load
// ==============================

window.onload = startGame;

