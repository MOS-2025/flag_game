

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
 resetTimer();
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


