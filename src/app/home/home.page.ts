import { Component } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  getKategories = [];
  getAns = [];
  myscores = [];
  getquestion = [];

  constructor(public quizservice : QuizerService ) {
    this.getKategories = this.quizservice.gotData();
    this.myscores = this.quizservice.getScores();
    this.getquestion = this.quizservice.getQuestions();
    this.getAns = this.quizservice.getAnsdetails();
    //this.getquestion= this.quizservice.gotThem()
  }
  GetQuiz(){
      this.quizservice.GetQuiz();
  }

  QuizProfiles(){
    this.quizservice. QuizProfiles();
  }

  submitScore(userAnswers,Answers){
    this.quizservice.submitScore(userAnswers,Answers);
  }

  playQuiz(key){
    this.quizservice.setQuiz(key);
  }

  logout(){
    this.quizservice.logout();
  }
}
