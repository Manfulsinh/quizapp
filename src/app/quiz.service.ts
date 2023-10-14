import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions: any[] = [
   

    {
      text: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
      markedForReview: false
    },
    {
      text: "Which is the largest planet in our solar system?",
      choices: ["Mars", "Earth", "Jupiter", "Venus"],
      answer: "Jupiter",
      markedForReview: false
    },
    {
      text: "Which animal is known as the king of the jungle?",
      choices: ["Lion", "Elephant", "Cheetah", "Giraffe"],
      answer: "Lion",
      markedForReview: false
    },


    {
      text: "Which is the largest planet in our solar system?",
      choices: ["Mars", "Earth", "Jupiter", "Venus"],
      answer: "Jupiter",
      markedForReview: false
    },
    {
      text: "Which animal is known as the king of the jungle?",
      choices: ["Lion", "Elephant", "Cheetah", "Giraffe"],
      answer: "Lion",
      markedForReview: false
    },
   
   
  ];

  score = 0;
  currentQuestionIndex = 0;

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  checkAnswer(answerIndex: number) {
    const selectedChoice = this.questions[this.currentQuestionIndex].choices[answerIndex];
    
    if (selectedChoice === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  
  reset() {
    this.score = 0;
    this.currentQuestionIndex = 0;
  }
}
