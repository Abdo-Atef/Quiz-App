import { questionContainer } from "./question.js";

questionContainer

export class Quiz {
  constructor(category, difficulty, amount){
    this.category = category;
    this.difficulty = difficulty;
    this.amount = amount;
    this.score = 0;
  }


  async getQuestions(){
  let response = await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}&type=multiple`)
  let data = await response.json();
  return data.results
  }

  endQuiz(){
    const cartona = `
    <div class="col-lg-5 p-3 py-4 bg-white rounded-3 text-center animate__animated animate__bounceIn">
      <h5>Your Score Is: ${this.score}</h5>
      <button id="tryAgainBtn" class="btn btn-primary rounded-5 mt-2"><i class="bi bi-arrow-clockwise"></i> Try again</button>
    </div>
    `;
    questionContainer.innerHTML = cartona;
    
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    tryAgainBtn.addEventListener('click',()=> window.location.reload());
  }
}