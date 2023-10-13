import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  currentQuestion: any;
  selectedAnswerIndex: number | null = null;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion() {
    this.currentQuestion = this.quizService.getQuestion();
    this.selectedAnswerIndex = null;
  }

  selectAnswer(idx: number) {
    this.selectedAnswerIndex = idx;
    console.log('Answer selected:', idx);
  }

  reviewQuestion() {
    if (this.currentQuestion) {
        console.log('Current Question Before:', this.currentQuestion);
        this.currentQuestion.markedForReview = !this.currentQuestion.markedForReview;
        console.log('Current Question After:', this.currentQuestion);
    }
}


  

  nextQuestion() {
    console.log('Next button clicked');
    if (this.selectedAnswerIndex !== null) {
        this.quizService.checkAnswer(this.selectedAnswerIndex);
    }
    this.loadQuestion();
}
}
