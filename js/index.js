import { Questions } from "./question.js";
import { Quiz } from "./quiz.js";

let categoryMenu = document.getElementById('categoryMenu')
let difficultyOptions = document.getElementById('difficultyOptions')
let questionsNumber = document.getElementById('questionsNumber')
let startQuiz = document.getElementById('startQuiz')
let quizOptions = document.getElementById('quizOptions')
export let questions ;
export let quiz;

startQuiz.addEventListener('click',async function () {
  quiz = new Quiz(categoryMenu.value, difficultyOptions.value, questionsNumber.value);
  questions = await quiz.getQuestions();
  let ques = new Questions(0);
  quizOptions.classList.replace('d-flex','d-none')
})

