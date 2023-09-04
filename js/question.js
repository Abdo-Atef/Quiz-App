import { questions, quiz } from "./index.js";
export let questionContainer = document.querySelector('.questions-container .questionContainer');

export class Questions{

  constructor(index){
    this.category = questions[index].category;
    this.question = questions[index].question;
    this.correctAnswer = questions[index].correct_answer;
    this.wrongAnswers = questions[index].incorrect_answers;
    this.allAnswers = this.getChoices();
    this.index = index;
    this.isAnswerd = false;
    this.displayQuestion();
  }


  getChoices(){
    return this.wrongAnswers.concat(this.correctAnswer).sort();
  }

  displayQuestion(){
    let cartona =`
      <div class="col-lg-6 p-3 bg-white rounded-3 text-center animate__animated animate__bounceIn">
        <div class="header d-flex justify-content-between mb-3">
          <div class="btn btn-category">${this.category}</div>
          <div class="btn btn-questions">${this.index + 1} of ${questions.length} Questions</div>
        </div>
        <h5 class="questionText mb-5 mt-5">${this.question}</h5>
        <ul class="choices d-flex flex-wrap p-0">
          ${this.allAnswers.map( (x) => {return `<li>${x}</li>`}).join("")}
        </ul>
        <div class="fs-5 fw-semibold mt-4"><i class="bi bi-emoji-smile"></i> Score: <span>${quiz.score}</span></div>
      </div>
    `;
    questionContainer.innerHTML = cartona;

    this.CheckAnswer();

  }
  CheckAnswer(){
    let choices = document.querySelectorAll('.questionContainer ul li')
    choices.forEach(x => { x.addEventListener('click', (e) => {
        if (!this.isAnswerd) {
          this.isAnswerd =true;
          if(e.target.innerHTML == this.correctAnswer){
            e.target.classList.add('correct', 'animate__animated', 'animate__bounceIn')
            quiz.score++;
          }
          else{
            e.target.classList.add('wrong','animate__animated', 'animate__shakeX')
            
          }
          setTimeout(() => {
            this.nextQuestion()
          }, 800);
        }
      })
    });
    
  }
  
  nextQuestion(){
    this.index++;
    if(this.index < questions.length){
      new Questions(this.index);
    }
    else{
      quiz.endQuiz();
    }
  }
}