// import { Component, OnInit } from '@angular/core';
// import { QuizerService } from '../quizer.service';
// import { ToastController } from '@ionic/angular';
// import * as firebase from 'firebase'
// import { getTNode } from '@angular/core/src/render3/util';

// @Component({
//   selector: 'app-play-q',
//   templateUrl: './play-q.page.html',
//   styleUrls: ['./play-q.page.scss'],
// })
// export class PlayQPage implements OnInit {

//   // Get a reference to the database service
//  database = firebase.database();

//   Answers;

//   getQuiz = [];
//   getquestion = [];
//   getAns = [];
//   getOpt = [];

//   //user =[]

//   ShowAll = [];
//   myAnswers = [];
//   QuizAnswers

//   score;
//   QuizAns
//   UserAnswer
//   Key
//   //////////////////
//   UserInputz = []
//   MyAnswers
//   Quizques 
//   myscore : boolean;
//   questionIndex : number = 1;
//   quizScore: number = 0;
//   answer
//   ////////////
//   index = 0;

//   userId
//   catKey
//   finalScore
//   correctAnswer: any;

//   constructor(public quizservice : QuizerService, public toastController: ToastController) { 

//     this.ShowAll = this.quizservice.gotThem();
//     //// below not in use 
//     this.getQuiz = this.quizservice.gotData();
//     this.getOpt = this.quizservice.getOption();
//     this.getquestion = this.quizservice.getQuestions();
//     this.getAns = this.quizservice.getAnsdetails();
//     this.userId = this.quizservice.getAnswers();

//     //this.Totalscore = this.quizservice.gotTotal();
//       this.userId = this.quizservice.getUser();
//       this.catKey = this.quizservice.getkeya()
//   }
//   UserAnswers(Answers, Options) {
// 	  this.quizservice.UserAnswers(Answers, Options);
//   }


//   async SubmitToast() {
//     const toast = await this.toastController.create({
//       message: 'Your Quiz Submitted successfully..',
//       duration: 2000
//     });
//     toast.present();
//   }

//   ngOnInit() {
   
//   }

//   //////////
//   pushUserInputzArray(Quizques, QuizAns, correctAnswer, myscore) {
//     // this.UserInputz.push({
//     //   Quizques : this.Quizques,
//     //   MyAnswers : this.QuizAns,
//     //   score : this.myscore,
//     //   StageResult : this.quizScore,
//     // });
//   }
// ///////////////
//   QuizMe(event,Quizques){

//     this.QuizAns = event.detail.value
//     this.UserAnswer = event.detail.value
    
//       console.log("hereree")
// this.QuizAns = this.QuizAns

// var UserAnswer  = this.UserAnswer;
// let correctAnswer : string;
//       this.UserAnswer.length === 0;
//       for(var x = 0; x < this.UserAnswer.length; x++){
//         //index user entries
//         if(this.questionIndex < this.UserAnswer.length){
//           for(let i = this.questionIndex -1; i < this.questionIndex; i++ ){
//               console.log(i)
//               var UserAnswer  = this.UserAnswer;
//               console.log(UserAnswer )
//               var CorrectAnswer;
//               var CorrectAnswer = this.ShowAll[i].QuizAns;
//                    //make your value true to be able compare
//                 if(this.ShowAll[i].Quizvalues[x]){
//                   console.log(this.ShowAll[i].Quizvalues [x])
//                   CorrectAnswer = this.ShowAll[i].QuizAns[i]
//                 }
//               }
// /////////////////////////////////////////////////////////////////////////////////// i will cum 
//   // if (this.ShowAll.length >= 1) {
//   //    for (let i = 0; i < this.ShowAll.length; i++) {
//   //                 // console.log(i);
//   //         if (this.ShowAll[i].Quizques  === Quizques ) {
//   //              for (let n = 0; n < this.ShowAll[i].QuizAns.length; n++) {
//   //                     // console.log(this.Questionz[i].value[n]);
//   //               if (this.ShowAll[i].Quizvalues[n]) {
//   //                       // console.log(this.Questionz[i].Answer[n]);
//   //                       this.correctAnswer = this.ShowAll[i].QuizAns[n];
//   //                       // console.log(this.correctAnswer);
//   //               }
//   //            }
//   //          }
//   //      }
//   //  }

//               /////////////////////////////////////////////////////////////////////
//                 /// compare the userinput with Correct answer
//               if(UserAnswer === correctAnswer){
//                 this.myscore = true;
//               } else {
//                 this.myscore = false;
//               }
//             console.log(correctAnswer )
//             console.log(this.myscore)
//             console.log("____________")

//             if(this.ShowAll === this.UserAnswer.length){
//               this.calculateScore();
//             }

//              if(this.myscore === true){
//                this.quizScore++;
//              }
//              else{
//               this.quizScore--;
//              }


//              ////////////////////////////////////////// second part
//         //  if (this.UserInputz.length === 0) {
//         //       this.pushUserInputzArray(Quizques, QuizAns, this.correctAnswer, this.myscore);
             
//         //     } else if (this.UserInputz.length > 0) {
//         //       for (let i = 0; i < this.UserInputz.length; i++) {
//         //         if (this.UserInputz[i].gameQuestions === question) {
//         //           console.log('Question has a match in game array');
//         //           this.index = this.UserInputz.indexOf(this.UserInputz[i]);
//         //         } else {
//         //           this.index = null;
//         //         }
//         //       }
//              ////////////////////



//           }

//         //  this.questionIndex++;
//          // this.UserInputz.length =0;
//         }

//         console.log(this.quizScore)

//         return firebase.database().ref('/Results')
//          .child('PlayRec/' + this.userId +'/'+ this.catKey).push({
//           Quizques : Quizques,
//           MyAnswers : this.UserAnswer,
//           score : this.myscore,
//           StageResult : this.quizScore,
//           }).key;

//         // this.UserInputz.push({
//         //   Quizques : Quizques,
//         //   MyAnswers : this.UserAnswer,
//         //   score : this.myscore,
//         //   StageResult : this.quizScore,
//         // })
        

//         console.log(this.UserInputz)

    
//        console.log(this.quizScore)
//    }

//    calculateScore(){
//        if(this.quizScore >= 0){
//            this.finalScore = this.quizScore / 5 * 100;
//        }
//        else{
//          this.finalScore = 0;

//        }

//     //  this.quizScore = this.quizScore / 5 * 100;

//       return firebase.database().ref('Scores')
//       .child(this.catKey).push({
//         Results : this.finalScore 
//       }).key
//    }

//    Myanswer(){
//     // this.quizservice.Myanswer(this.quizScore,this.Answers );
//     }

//   submitScore(UserAnswers, QuizAns){
//     // this.quizservice.submitScore(UserAnswers, QuizAns);
//    }

// //for 
// playQuiz(){
//   this.quizservice. playQuiz();
// }

// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

 // getting user details
 user = firebase.auth().currentUser;
 uid

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
  UserInputz = [];

  MyAnswers
  Quizques 
  myscore : boolean;
  questionIndex : number = 1;
  quizScore: number = 0;
  answer
  ////////////
  index = 0;

  userId
  catKey
  TheScore : number = 0;
  correctAnswer;

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


  async SubmitToast() {
    const toast = await this.toastController.create({
      message: 'Your Quiz Submitted successfully..',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
   
  }

  //////////
  pushUserInputzArray(Quizques, QuizAns, correctAnswer, myscore) {
    this.UserInputz.push({
      Quizques : Quizques,
      MyAnswers : QuizAns,
      CorrectAnswer : correctAnswer,
      score : myscore,
    });
    console.log(this.UserInputz);
    
  }
///////////////


  QuizMe(event,Quizques){
    const question: string = Quizques;
    const QuizAns = event.detail.value;

    let correctAnswer : string;
    let myscore: string; 

  //  this.UserAnswer = event.detail.value
    
      console.log("here.....")
//this.QuizAns = this.QuizAns


  if (this.ShowAll.length >= 1) {
     for (let i = 0; i < this.ShowAll.length; i++) {
   
          if (this.ShowAll[i].Quizques  === Quizques ) {
            //correctAnswer = this.ShowAll[i].QuizAns;
               for (let n = 0; n < this.ShowAll[i].QuizAns.length; n++) {
        
                if (this.ShowAll[i].Quizvalues[n]) {
                        // console.log(this.Questionz[i].Answer[n]);
                        correctAnswer = this.ShowAll[i].QuizAns[n];
                      
                    }
                 }
               }
             }
          }
                /// compare the userinput with Correct answer
              if( correctAnswer === QuizAns){
                this.myscore = true;
              } if (  correctAnswer !== QuizAns){
                this.myscore = false;
              }
              console.log(this.ShowAll )
            console.log(QuizAns )
            console.log(correctAnswer)
            console.log(this.myscore)

         if (this.UserInputz.length === 0)
          {
            
              this.pushUserInputzArray(Quizques, QuizAns, correctAnswer, this.myscore); 
          } 
          else if (this.UserInputz.length > 0)
           {
           
            for (let i = 0; i < this.UserInputz.length; i++) {
                if (this.UserInputz[i].Quizques  === question ) { ////
                  this.index = this.UserInputz.indexOf(this.UserInputz[i]);
                  console.log(this.UserInputz[i].Quizques  === question)
                } else {
                  this.index = null;
                }
              }
              if (this.index != null) {
                console.log(this.index);
                this.UserInputz[this.index].QuizAns = QuizAns;
                this.UserInputz[this.index].score = this.myscore;
                
              } else if (this.index === null) {
                this.pushUserInputzArray(Quizques, QuizAns, correctAnswer, this.myscore); 
              }
            }
             //use inf
    if (this.user != null) {
      this.uid = this.user.uid;
      console.log(this.uid);
    }
  }
         

  SubmitAll(){
    if(this.UserInputz){
      for(let i = 0; i < this.UserInputz.length; i++){
        if(this.UserInputz[i].score === true){
          this.TheScore++;
        }
      }
    }
    this.PushToFirebase();
  }

  PushToFirebase(){
    console.log(this.UserInputz);
    
     let chooseK = firebase.database().ref().child('Results/' + this.uid + '/' + this.catKey + '/' ).push().key;

     for(let i = 0; i < this.UserInputz.length; i++){
       firebase.database().ref('Results/' + '/' + this.uid + '/' + this.catKey + '/' + chooseK + '/' + this.UserInputz[i].Quizques).update({
        Quizques: this.UserInputz[i]. Quizques,
        MyAnswers : this.UserInputz[i].MyAnswers,
        CorrectAnswer: this.UserInputz[i].CorrectAnswer,
        score: this.UserInputz[i].score
        
      });
      console.log(this.UserInputz[i].CorrectAnswer);
      console.log(this.UserInputz[i].score);
    }

    firebase.database().ref().child('OurScores/' + this.uid + '/' + chooseK + '/' + this.catKey + '/' ).update({
      totalScore: this.TheScore
      });   
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
