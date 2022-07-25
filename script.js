let quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let currentIndex = 0;
let score = 0;
// HTML Elements
const submit = document.getElementById("submit");
let answer_a = document.getElementById("answer_a");
let answer_b = document.getElementById("answer_b");
let answer_d = document.getElementById("answer_d");
let answer_c = document.getElementById("answer_c");
let question = document.getElementById("question");
let quiz = document.getElementById("quiz");
let answers = document.querySelectorAll(".answer");

importData();

submit.addEventListener("click", () => {
  const answer = getAnswer();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentIndex].correct) {
      score++;
    }
  }

  currentIndex++;
  if (currentIndex < quizData.length) {
    importData();
  } else {
    quiz.innerHTML = `
  <h2 class="quiz-head">You answered correctly at ${score}/${quizData.length} questions.</h2>
  <button onclick="location.reload()">Reload</button>
  `;
  }
});

function importData() {
  let currentQuiz = quizData[currentIndex];

  question.innerText = currentQuiz.question;
  answer_a.innerText = currentQuiz.a;
  answer_b.innerText = currentQuiz.b;
  answer_d.innerText = currentQuiz.d;
  answer_c.innerText = currentQuiz.c;
  unchecked();
}

function unchecked() {
  answers.forEach((e) => {
    e.checked = false;
  });
}

function getAnswer() {
  let answer = undefined;
  answers.forEach((e) => {
    if (e.checked) {
      answer = e.id;
      // console.log(answer);
    }
  });
  return answer;
}
