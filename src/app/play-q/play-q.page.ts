import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-play-q',
  templateUrl: './play-q.page.html',
  styleUrls: ['./play-q.page.scss'],
})
export class PlayQPage implements OnInit {

  // Get a reference to the database service
 database = firebase.database();

  Answers;quizScore

  getQuiz = [];
  getquestion = [];
  getAns = [];
  getOpt = [];

  ShowAll = [];
  myAnswers = [];
  score

  constructor(public quizservice : QuizerService, public toastController: ToastController) { 
    this.ShowAll=[]
    this.ShowAll = this.quizservice.gotThem();
    this.getQuiz = this.quizservice.gotData();
    this.getOpt = this.quizservice.getOption();
    this.getquestion = this.quizservice.getQuestions();
    this.getAns = this.quizservice.getAnsdetails();
    this.myAnswers = this.quizservice.getAnswers();

    this.score = this.quizservice.gotTotal();
  
  
  }




  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Quiz Submitted successfully..',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

   QuizMe(event){
     this.Answers = event.detail.value
   }

  //  Myanswer(){
  //    this.quizservice.Myanswer(this.quizScore,this.Answers );
  //  }

  submitScore(userAnswers,Answers){
     this.quizservice.submitScore(Answers,Answers);
   }

   calculateScore() {
   // this.quizScore = this.quizservice.calculateScore(this.Answers);
   
  }
  

//for 
playQuiz(){
  this.quizservice. playQuiz();
}

}
