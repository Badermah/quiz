const quizData = [
	{
		question: "What is the capital of France?",
		choices: ["Paris", "London", "Berlin", "Rome"],
		answer: "Paris"
	},
	{
		question: "What is the largest country in the world?",
		choices: ["Russia", "Canada", "China", "USA"],
		answer: "Russia"
	},
	{
		question: "What is the highest mountain in the world?",
		choices: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount Whitney"],
		answer: "Mount Everest"
	}
];

const startBtn = document.getElementById("startBtn");
const quizDiv = document.getElementById("quiz");
const questionText = document.getElementById("question");
const choiceButtons = document.querySelectorAll("#choices button");
const progressText = document.getElementById("progress");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
	startBtn.classList.add("hidden");
	quizDiv.classList.remove("hidden");
	showQuestion();
}

function showQuestion() {
	const question = quizData[currentQuestion];
	questionText.innerText = question.question;
	choiceButtons.forEach((button, i) => {
		button.innerText = question.choices[i];
		button.addEventListener("click", checkAnswer);
	});
	progressText.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer(event) {
	const selectedChoice = event.target.innerText;
	const question = quizData[currentQuestion];
	if (selectedChoice === question.answer) {
		score++;
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
		<button onclick="location.reload()">Restart Quiz</button>
	`;
}

startBtn.addEventListener("click", startQuiz);

// Used past class work and online resources to complete assighment 