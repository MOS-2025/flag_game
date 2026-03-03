/* jshint esversion: 6 */

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
const questionPerLevel = 5;
const requiredScore = 4;
const maxWrongAnswers = 3;




// Game Variables
let score = 0;
let currentLevel = 0;
let timeLeft = 15;
let timer;
let currentCountry = "";
let questionsAnswered = 0;
let playerName = "";
let wrongAnswers = 0;
let countryIndex = 0;
let shuffledCountries = [];

// Sample Country Data (Using FlagCDN) Level 1
const levelGroups = [
[
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Brazil", code: "br" },
  { name: "Japan", code: "jp" },
  { name: "China", code: "cn" },
  { name: "Ireland", code: "ie" },
],
// Sample Country Data (Using FlagCDN) Level 2
[
    { name: "Canada", code: "ca" },
    { name: "India", code: "in" },
    { name: "Italy", code: "it" },
    { name: "Mexico", code: "mx" },
    { name: "Spain", code: "es" },
    { name: "Australia", code: "au" },
],
// Sample Country Data (Using FlagCDN) Level 3
[
    { name: "Kenya", code: "ke" },
    { name: "Nigeria", code: "ng" },
    { name: "South Africa", code: "za" },
    { name: "Saudi Arabia", code: "sa" },
    { name: "South Korea", code: "kr" },
    { name: "Argentina", code: "ar" },

],

//sample Counrty Data (Using FlagCDN) Level 4
[
    { name: "Belarus", code: "by" },
    { name: "Bolivia", code: "bo" },
    { name: "Cambodia", code: "kh" },
    { name: "Costa Rica", code: "cr" },
    { name: "Croatia", code: "hr" },
    { name: "Tunisia", code: "tn" },

],

//sample Counrty Data (Using FlagCDN) Level 5

[

    { name: "Malta", code: "mt" },
    { name: "Iceland", code: "is" },
    { name: "Angola", code: "ao" },
    { name: "Cyprus", code: "cy" },
    { name: "Estonia", code: "ee" },
    { name: "Latvia", code: "lv" },
],

];


// ==============================
// Ask Player Name
// ==============================
/*

function askPlayerName() {
  playerName = prompt("🌍 Welcome to the World Flag Game!\n\nPlease enter your name:");

  while (!playerName || playerName.trim() === "") {
    playerName = prompt("Please enter your name to start:");
  }

  alert(`Good luck. The game has 5 levels and 5 questions per level, in order to move to next level you must least 4 points to move to next level.If you get 3 wrong answers in a level, you will fail that level. Good luck ${playerName}! 🎮`);
}
*/

// ==============================
// Start Game
// ==============================

function startGame() {

      if (questionsAnswered === 0) {
    shuffledCountries = shuffle(levelGroups[currentLevel]);
    countryIndex = 0;
  }
    
  loadRandomFlag();
  guessInput.value = "";
  message.textContent = "";
  submitBtn.disabled = false;
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
      wrongAnswers++;
      questionsAnswered++;

      message.textContent = `⏰ Time's up! The answer was ${currentCountry}`;
      message.className = "fw-semibold text-warning";


      if (wrongAnswers >= maxWrongAnswers || questionsAnswered >= questionPerLevel) {
        setTimeout(finishLevel, 2000);
      } else {
        setTimeout(startGame, 2000);
      }
    }
  }, 1000);
}

// =================================================
// ⭐ Fisher–Yates Shuffle (true random)
// =================================================
function shuffle(arr) {
  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

// ==============================
// Load Random Flag
// ==============================

function loadRandomFlag() {
  const country = shuffledCountries[countryIndex];

  currentCountry = country.name;
  flagImg.src = `https://flagcdn.com/w320/${country.code}.webp`;

countryIndex++;

}


// ==============================
// Check Answer
// ==============================

function checkAnswer() {
  const userGuess = guessInput.value.trim().toLowerCase();
  const correctAnswer = currentCountry.toLowerCase();

  if ( !userGuess) return ;
    clearInterval(timer);
    /*score++;*/
    questionsAnswered++;
  if (userGuess === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;

    message.textContent = "✅ Correct!";
    message.className = "fw-semibold text-success";

} else {
    wrongAnswers++; 

  message.textContent = `❌ Wrong! The answer was ${currentCountry}`;
  message.className = "fw-semibold text-danger";
  }

  if (wrongAnswers >= maxWrongAnswers || questionsAnswered >= questionPerLevel) {
    setTimeout(finishLevel, 2000);
  } else {
    setTimeout(startGame, 2000);
}
}

// ==============================
// Finish Level
// ==============================

function finishLevel() {
  clearInterval(timer);

    if (wrongAnswers >= maxWrongAnswers) {

    message.textContent = `❌ You got 3 wrong answers. Level failed!`;
    message.className = "fw-semibold text-danger";

    questionsAnswered = 0;
    score = 0;
    wrongAnswers = 0;
    scoreDisplay.textContent = score;

    setTimeout(startGame, 2000);
    return;
  }

  if (score >= requiredScore) {

    // ✅ If LAST LEVEL completed
    if (currentLevel === levelGroups.length - 1) {
      message.textContent = `🏆 CONGRATULATIONS! ${playerName}, you completed ALL levels!`;
      message.className = "fw-semibold text-success";
    

      submitBtn.disabled = true;
      guessInput.disabled = true;
      nextBtn.disabled = true;

      return; // STOP GAME
    }

    // ✅ Move to next level
    currentLevel++;
    questionsAnswered = 0;
    wrongAnswers = 0;
    levelDisplay.textContent = `Level ${currentLevel + 1}`;
    /*score = 0;*/

    scoreDisplay.textContent = score;
    levelDisplay.textContent = `Level ${currentLevel + 1}`;
    message.textContent = `🎉 Welcome to Level ${currentLevel + 1}!`;
    message.className = "fw-semibold text-primary";

    setTimeout(() => {
    submitBtn.disabled = false;
    guessInput.disabled = false;
      startGame();
    }, 2000);

  } else {


    message.textContent = `❌ You need ${requiredScore}/${questionPerLevel} to pass. Restarting level...`;
    message.className = "fw-semibold text-danger";

    questionsAnswered = 0;
    score = 0;
    wrongAnswers = 0;
    scoreDisplay.textContent = score;

    setTimeout(() => {
    submitBtn.disabled = false;
    guessInput.disabled = false;
      startGame();
    }, 2000);
  }
}

// ==============================
// Reset Game
// ==============================
function resetGame() {
  score = 0;
  currentLevel = 0; 
  questionsAnswered = 0;
  wrongAnswers = 0;

  submitBtn.disabled = false;
  guessInput.disabled = false;

  askPlayerName();

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

window.onload = function (){
    askPlayerName();
    startGame();
};