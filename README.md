# 🌍 World Flag Game

An interactive, multi-level geography quiz built with **JavaScript, HTML & CSS**, designed to test users’ knowledge of world flags through timed challenges with progressive difficulty levels.

---

## 🔗 Live Project

- **Live Site:** https://mos-2025.github.io/flag_game/
- **Repository:** https://github.com/your-username/world-flag-game  

---

## 1 Project Overview

The **World Flag Game** is a browser-based educational quiz application that challenges users to identify countries based on their national flags.

### The game consists of:

- 5 progressive levels  
- 5 questions per level  
- 15-second countdown per question  
- 3 wrong answers allowed per level  
- Minimum 4 correct answers required to progress  

### The application demonstrates:

- DOM manipulation  
- State management  
- Timers and asynchronous logic  
- Algorithm implementation (**Fisher–Yates Shuffle**)  
- Conditional game flow control  
- Clean, scalable JavaScript structure  

---

## 2 UX (User Experience)

- Immediate feedback system improves engagement  
- Colour-coded messaging enhances clarity and accessibility  
- Level progression increases replay value  
- Failure threshold (3 wrong answers) adds tension  
- Timer pressure increases cognitive engagement  

The navbar and footer were developed using **Bootstrap 5.3**.
<img width="940" height="36" alt="image" src="https://github.com/user-attachments/assets/edcca78a-89e6-46be-a4a8-61ac75bfc0b1" />

- Immediate feedback system improves engagement
- ## Structural Layout
The UI is structured around:
- Game Rules
- Flag display image
- Input field
- Submit button
- Next button
- Score display
- Timer display
- Level display
- Feedback message container

<img width="940" height="424" alt="image" src="https://github.com/user-attachments/assets/9b293b2f-34a5-470b-86fc-e854721f0f5f" />

The navbar and footer were developed using **Bootstrap 5.3**.
<img width="940" height="36" alt="image" src="https://github.com/user-attachments/assets/0a6d985a-857f-4778-892e-5f93cf4ba020" />


---

## 3 Game Logic & Architecture

The game maintains internal state using:

- `score`
- `currentLevel`
- `questionsAnswered`
- `wrongAnswers`
- `timeLeft`
- `currentCountry`
- `shuffledCountries`

### Randomisation Fix

During development, duplicate flags appeared multiple times.

To resolve this, the **Fisher–Yates Shuffle Algorithm** was implemented, ensuring:

- True randomness  
- No repeated flags within a level  

### Timer Logic

- Starts at 15 seconds per question  
- Auto-fails when reaching 0  
- Advances game state accordingly  

### Level Progression

- Final level completion disables inputs  
- Game ends after final level  
- “Play Again” option resets the game  

---

## 4 Features

### Core Features

- 5 progressive levels  
- 15-second timed questions  
- Real-time score tracking  
- Failure threshold system  
- Automatic level progression   
- Keyboard "Enter" submission support  
- Game reset functionality  

---

## 5 Responsive Design

Fully responsive across devices:

- Stacked buttons for smaller screens  
- Touch-friendly inputs  
- Scaled flag images  
- Adaptive spacing
- <img width="940" height="545" alt="image" src="https://github.com/user-attachments/assets/985e8c37-8802-4d93-865b-86c69bdcc3a8" />


---

## 6 Future Enhancements

- Local Storage high score persistence  
- Leaderboard system  
- Difficulty modes  
- Dark mode toggle  
- Sound effects & animations  
- Multiplayer mode
- Additional countries
- Countries by region 

> A name input feature was partially implemented but removed due to Lighthouse performance impact caused by JavaScript alert popups.

---

## 7 Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- Bootstrap 5  

---

## 8 Testing & Validation

### Functional Testing

- Timer reset between questions  
- Level progression logic  
- Fail state after 3 wrong answers  
- Game completion state  
- Reset functionality  
- Enter key submission  

### Cross-Browser Testing

- Chrome  
- Edge  

### Validation

- No CSS validation errors
- <img width="944" height="341" alt="image" src="https://github.com/user-attachments/assets/ff462fee-e24c-4b3c-83b5-6a9825851b6f" />

- No HTML validation errors
- <img width="944" height="341" alt="image" src="https://github.com/user-attachments/assets/d23cf51a-603d-443e-af6d-6548adf7c646" />

- No JavaScript validation errors
- <img width="940" height="479" alt="image" src="https://github.com/user-attachments/assets/6ca40966-996d-4250-8222-e60d3e8d79ee" />

- Lighthouse Score
- <img width="944" height="588" alt="image" src="https://github.com/user-attachments/assets/e5d8886f-e64a-4fc5-ab4b-2fc17ee5cffb" />


---

## 9 Commits & Deployment

1. The site was deplayed to GitHub when the first commits were complete.  
2. All commits were clearly commented throughout the project.  
3. Deployed using GitHub Pages.  

---

## 📂 Credits

- Flag images provided via FlagCDN  
- Bootstrap 5 library  
- Fisher–Yates Shuffle Algorithm implementation was used to randomise the flagselection
- MDN Web Docs
- Traversy Media tutorials.
- W3Schools was used as a resource when developing code, for example event listeners.
  
