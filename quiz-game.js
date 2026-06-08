const questions = [
  {
    question: "What are two things you can never eat for breakfast?",
    answers: ["Brown Rice & Egg", "Lunch & Dinner", "Sweets & Chocolate"],
    correct: 1
  },
  {
    question: "What is always coming but never arrives?",
    answers: ["Tomorrow", "Promise", "Vision"],
    correct: 0
  },
  {
    question: "What can be broken but never held?",
    answers: ["A Promise", "A glass", "All of the above"],
    correct: 0
  },
  {
    question: "What word is spelled incorrectly in every single dictionary?",
    answers: ["Randomize", "Egostical", "Incorrectly"],
    correct: 2
  },
  {
    question: "What never asks a question but gets answered all the time?",
    answers: ["Me", "Your cellPhone", "You"],
    correct: 1
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");


function showQuestion() {
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length} `;
  questionEl.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
  const button = document.createElement("button");
  button.textContent = answer;

  button.addEventListener("click", () => {
    selectAnswer(index);
  });

  answersEl.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = answersEl.querySelectorAll("button");
  if (selectedIndex === currentQuestion.correct) {
    score++;
  }
  buttons.forEach((btn, index) => {
    btn.style.pointerEvents = "none";
    
    if (index === currentQuestion.correct) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("wrong");
    } 
  });
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  answered = false;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  nextBtn.style.display = "none";

  scoreContainer.classList.remove("hidden");

  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  scoreContainer.classList.add("hidden");
  questionEl.style.display = "block";
  answersEl.style.display = "flex";

  showQuestion();
});
showQuestion();


