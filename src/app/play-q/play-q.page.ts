import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-play-q',
  templateUrl: './play-q.page.html',
  styleUrls: ['./play-q.page.scss'],
})
export class PlayQPage implements OnInit {

  play1;play2;
  getQuiz = [];
  getquestion = [];
  getAns = [];
  getOpt = [];

  ShowAll = [];

  constructor(public quizservice : QuizerService) { 
    this.ShowAll=[]
    this.ShowAll = this.quizservice.gotThem();
    this.getQuiz = this.quizservice.gotData();
    this.getOpt = this.quizservice.getOption();
    this.getquestion = this.quizservice.getQuestions();
    this.getAns = this.quizservice.getAnsdetails();
  
   // this.getquestion= this.quizservice.gotThem()
  }

  ngOnInit() {
  }

   QuizMe(event){
     this.play1 = event.detail.value
   }
  

//for 
playQuiz(){
  this.quizservice. playQuiz();
}

}
