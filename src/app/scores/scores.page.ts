import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {
  myAnswers = [];
  score
  constructor(public quizservice : QuizerService) { 
         this. myAnswers = this.quizservice.getAnswers();
         this.score = this.quizservice.gotTotal();
  }

  ngOnInit() {
  }

  submitScore(userAnswers,Answers){
    this.quizservice.submitScore(Answers,Answers);
  }

}
