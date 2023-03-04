const quizData = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Tech Markup Language",
      "Hyperspace Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Content Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does JS stand for?",
    choices: ["JavaStyle", "JavaSource", "JavaScript", "JavaServer"],
    answer: "JavaScript",
  },
];

const startBtn = document.getElementById("startBtn");
const quizDiv = document.getElementById("quiz");
const questionText = document.getElementById("question");
const choiceButtons = document.querySelectorAll("#choices button");
const progressText = document.getElementById("progress");
const timeText = document.getElementById("time");

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;

function startQuiz() {
  startBtn.classList.add("hidden");
  quizDiv.classList.remove("hidden");
  showQuestion();
  let timer = setInterval(() => {
    timeLeft--;
    timeText.innerText = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      // Update this condition to handle negative time
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  const question = quizData[currentQuestion];
  questionText.innerText = question.question;
  choiceButtons.forEach((button, i) => {
    button.innerText = question.choices[i];
    button.addEventListener("click", checkAnswer);
  });
  progressText.innerText = `Question ${currentQuestion + 1} of ${
    quizData.length
  }`;
  timeText.innerText = `Time: ${timeLeft}s`;
}

function checkAnswer(event) {
  const selectedChoice = event.target.innerText;
  const question = quizData[currentQuestion];
  if (selectedChoice === question.answer) {
    score++;
  } else {
    timeLeft -= 5; // Subtract 10 seconds for an incorrect answer
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizDiv.innerHTML = `
	  <h2>Your score is ${score} out of ${quizData.length}.</h2>
	  <button id="submitScoreBtn">Submit Score</button>
	`;
  const submitScoreBtn = document.getElementById("submitScoreBtn");
  submitScoreBtn.addEventListener("click", showScoreInput);
}

function showScoreInput() {
  quizDiv.classList.add("hidden");
  scoreInput.classList.remove("hidden");
  const saveScoreBtn = document.getElementById("saveScoreBtn");
  saveScoreBtn.addEventListener("click", saveScore);
}

function saveScore() {
  const initialsInput = document.getElementById("initialsInput");
  const initials = initialsInput.value;
  alert(`Score saved: ${score} (${initials})`);
  location.reload();
}

startBtn.addEventListener("click", startQuiz);

// Used past classwork and online resources to complete this assighment
