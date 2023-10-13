import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score!: number;           
  totalQuestions!: number;  

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.score = this.quizService.score;
    this.totalQuestions = this.quizService.questions.length;
  }

  restartQuiz() {
    this.quizService.reset();

    location.reload();
  }
}
