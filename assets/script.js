

// DOM Elements
const flagImg = document.getElementById("flagImg");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const levelDisplay = document.getElementById("levelDisplay");


// Settings
const questionPerLevel = 1;




// Game Variables
let score = 0;
let currentLevel = 0;
let index = 0;
let timeLeft = 15;
let timer;
let currentCountry = "";
let questionsAnswered = 0;

// Sample Country Data (Using FlagCDN) Level 1
const levelGroups = [
[
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Brazil", code: "br" },
  { name: "Japan", code: "jp" },
],
// Sample Country Data (Using FlagCDN) Level 2
[
    { name: "Canada", code: "ca" },
    { name: "India", code: "in" },
    { name: "Italy", code: "it" },
    { name: "Mexico", code: "mx" },
],
// Sample Country Data (Using FlagCDN) Level 3
[
    { name: "Kenya", code: "ke" },
    { name: "Nigeria", code: "ng" },
    { name: "South Africa", code: "za" },
    { name: "Saudi Arabia", code: "sa" },

],

//sample Counrty Data (Using FlagCDN) Level 4
[
    { name: "Belarus", code: "by" },
    { name: "Bolivia", code: "bo" },
    { name: "Cambodia", code: "kh" },
    { name: "Costa Rica", code: "cr" },

],

//sample Counrty Data (Using FlagCDN) Level 5

[

    { name: "Malta", code: "mt" },
    { name: "Iceland", code: "is" },
],

];

//*const countries = levelGroups[0]; *//



// ==============================
// Start Game
// ==============================

function startGame() {
  loadRandomFlag();
  guessInput.value = "";
  message.textContent = "";
  startTimer();
}

// =================================================
// Timer
// =================================================
function startTimer() {
  clearInterval(timer);

  timeLeft = 15; // reset to 15 seconds
  timerDisplay.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      message.textContent = `⏰ Time's up! The answer was ${currentCountry}`;
      message.className = "fw-semibold text-warning";

      setTimeout(() => {
        startGame();
      }, 2000);
    }
  }, 1000);
}

// ==============================
// Load Random Flag
// ==============================

function loadRandomFlag() {
  const countries= levelGroups[currentLevel];
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
    clearInterval(timer);
    score++;
    scoreDisplay.textContent = score;
    message.textContent = "✅ Correct!";
    message.className = "fw-semibold text-success";
    submitBtn.disabled =true;
    guessInput.disabled =true;

    setTimeout(() => {
    submitBtn.disabled =false;
    guessInput.disabled =false;
    startGame();
    } ,2000);

        questionsAnswered++; // NEW

    // Level progression
    if (questionsAnswered >= questionPerLevel) { 
      currentLevel = Math.min(currentLevel + 1, levelGroups.length - 1);
      questionsAnswered = 0;

      levelDisplay.textContent = `Level ${currentLevel + 1}`;
      message.textContent = `🎉 Level ${currentLevel + 1}!`; 
      message.className = "fw-semibold text-primary";
    }


  } else {
    message.textContent = "❌ Wrong! Try again.";
    message.className = "fw-semibold text-danger";
  }
}
// ==============================
// Reset Game
// ==============================
function resetGame() {
  score = 0;
  currentLevel = 0; 
  questionsAnswered = 0;
  levelDisplay.textContent = `Level ${currentLevel + 1}`;
  scoreDisplay.textContent = score;
  startGame();
}



// ==============================
// Event Listeners
// ==============================

submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", () => {
  startGame();
});

playAgainBtn.addEventListener("click", function() {
  resetGame();
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

