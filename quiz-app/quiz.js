import { questions } from "./questions.js";

let currentIndex = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[currentIndex];

  progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.onclick = () => {
      selected = option;
    };

    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (selected === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;
  selected = null;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  progressEl.style.display = "none";

  resultEl.textContent = `Your score: ${score} / ${questions.length}`;
}

loadQuestion();