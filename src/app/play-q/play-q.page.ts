import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase'
import { getTNode } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-play-q',
  templateUrl: './play-q.page.html',
  styleUrls: ['./play-q.page.scss'],
})
export class PlayQPage implements OnInit {

  // Get a reference to the database service
 database = firebase.database();

  Answers;

  getQuiz = [];
  getquestion = [];
  getAns = [];
  getOpt = [];

  //user =[]

  ShowAll = [];
  myAnswers = [];
  QuizAnswers

  score;
  QuizAns
  UserAnswer
  Key
  //////////////////
  UserInputz = []
  MyAnswers
  Quizques 
  myscore : boolean;
  questionIndex : number = 1;
  quizScore: number = 0;
  answer
  ////////////
  userId
  catKey
  finalScore

  constructor(public quizservice : QuizerService, public toastController: ToastController) { 

    this.ShowAll = this.quizservice.gotThem();
    //// below not in use 
    this.getQuiz = this.quizservice.gotData();
    this.getOpt = this.quizservice.getOption();
    this.getquestion = this.quizservice.getQuestions();
    this.getAns = this.quizservice.getAnsdetails();
    this.userId = this.quizservice.getAnswers();

    //this.Totalscore = this.quizservice.gotTotal();
      this.userId = this.quizservice.getUser();
      this.catKey = this.quizservice.getkeya()
  }
  UserAnswers(Answers, Options) {
	  this.quizservice.UserAnswers(Answers, Options);
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

  QuizMe(event,Quizques){

    this.UserAnswer = event.detail.value
      console.log("hereree")
this.QuizAns = this.QuizAns

      this.UserInputz.length == 0;
      for(var i = 0; i <= this.UserAnswer.length; i++){
        //index user entries
        if(this.questionIndex <= this.UserAnswer.length){
          for(let i = this.questionIndex -1; i < this.questionIndex; i++ ){
              console.log(i)
              var UserAnswer  = this.UserAnswer;
              console.log(UserAnswer )
              var CorrectAnswer;
              var CorrectAnswer = this.ShowAll[i].Quizvalues;
                   //make your value true to be able compare
                if(this.ShowAll[i].Quizvalues[i]){
                  console.log(this.ShowAll[i].Quizvalues [i])
                  CorrectAnswer = this.ShowAll[i].QuizAns[i]
                }
                /// compare the userinput with Correct answer
              if(UserAnswer === CorrectAnswer){
                this.myscore = true;
              } else {
                this.myscore = false;
              }
            console.log(CorrectAnswer )
            console.log(this.myscore)
            console.log("____________")
            if(this.questionIndex === this.UserInputz.length){
              this.calculateScore();
            }

            //// 
             if(this.myscore === true){
               this.quizScore++;
             }
             else{
              this.quizScore--;
             }

             
           // console.log(this.calculateScore)
          }

          this.questionIndex++;
          this.UserInputz.length =0;
        }

        console.log(this.quizScore)
       // this.userId = user['user'].uid;
      // this.userId = firebase.auth().currentUser.uid

        return firebase.database().ref('/MyResults')
         .child('PlayRec/' + this.userId +'/'+ this.catKey).push({
          Quizques : Quizques,
          MyAnswers : this.UserAnswer,
          score : this.myscore,
          StageResult : this.quizScore,
          }).key;

        // this.UserInputz.push({
        //   Quizques : Quizques,
        //   MyAnswers : this.UserAnswer,
        //   score : this.myscore,
        //   StageResult : this.quizScore,
        // })

        console.log(this.UserInputz)

      }
       console.log(this.quizScore)
   }

   calculateScore(){
       if(this.quizScore <= 0){
           this.finalScore = this.quizScore * 5;
       }
       else{

       }

    //  this.quizScore = this.quizScore / 5 * 100;

      return firebase.database().ref('Scores')
      .child('Game' + this.catKey).push({
        StageResult : this.quizScore
      }).key
   }

   Myanswer(){
    // this.quizservice.Myanswer(this.quizScore,this.Answers );
    }

  submitScore(UserAnswers, QuizAns){
    // this.quizservice.submitScore(UserAnswers, QuizAns);
   }

//for 
playQuiz(){
  this.quizservice. playQuiz();
}

}
