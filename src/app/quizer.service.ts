import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Key } from 'protractor';
import { TouchSequence } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class QuizerService {
// Get a reference to the database service
 database = firebase.database();
 userId
 userEmail

 private CatListing = [];
 private myScores = [];
 private myAnswers = [];
 private Questions =[];
 private Answers = [];
 private Options = [];

 private showAll = [];
 cal_name;
 cal_age

 catKey
 ////
 childtrue;childfalse
 childKey
//for scores
scores;
initialInput;
correct;incorrect;totals
  constructor() { }

   //user logins
   SignIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then((result)=>{
      console.log("user is logged in")
    });
  }

   //user regisetering
   SignUp(email, password, name , age, gender){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error)  => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }).then((user)=>{
    console.log(user)
    console.log(user['user'].uid)

    this.userId = user['user'].uid;
    this.userEmail = user['user'].email;

    firebase.database().ref('user/' + this.userId).set({
      name : name,
      email : this.userEmail,
      age : age,
      gender: gender,
    }, (error)=>{
      if(error){
         //
         console.log(error)
      }else{
       //
       console.log("data is saved")
      }
    })
  });
    }

  GetQuiz(){

    var checking = firebase.database().ref().child("Category");
    checking.on("child_added", snap =>{
       this.cal_name = snap.child("cal_name").val();
       let key = snap.key 
       console.log("Heres your key: " + key)
       console.log(this.cal_name)
       this.CatListing.push({
        cal_name: this.cal_name,
        cal_key: key
    })
      console.log(this.CatListing)
    });
 
  }

  
    //////////////
    setQuiz(key){
      this.catKey = key
    }
    //////////////
  //for questions
      playQuiz(){
        //////////////////////////////////////////////////////////////////////////////////////////
              var rootRef = firebase.database().ref("QuizAnswers/" + this.catKey)
              rootRef.once('value', (snapshot) =>{
                var childKey = snapshot.key;
                  console.log(childKey)

                snapshot.forEach((childSnapshot) =>
                {
                  this.childfalse = "";
                  this.childtrue = "";

                   this.childKey = childSnapshot.key;
                  console.log(childSnapshot.key)
                  console.log(childKey)

              this.childfalse = childSnapshot.child("false").val();
              this.childtrue = childSnapshot.child("true").val();


                   this.Questions = [];
                  this.Questions.push({childSnapshot:this.childKey})
                  console.log(this.Questions);

                  this.Answers.splice(0,1)
                  this.Answers = [];
                  this.Answers.push({
                    true: this.childtrue
                  })
                  this.Options.splice(0,1)
                  this.Options=[]
                  this.Options.push({false:this.childfalse})

                  this.showAll.push({childSnapshot:this.Questions[0].childSnapshot,true:this.Answers[0].true,false:this.Options[0].false})
                   console.log(this.showAll) 

                  console.log();
                })
              })
                  console.log(this.Answers);

        /////////////////////////////////////////////////////////////////////////////////////////    
            }

      

  Myanswer(){
    var ans = firebase.database().ref().child("Answers");
    ans.on ("child_added", snap =>{
      this.correct = snap.child("correct").val();
      this.incorrect = snap.child("incorrect").val();
      this.totals = snap.child("totals").val();

       //for creating database remove after use
       var database = firebase.database();
       var ref = database.ref('Answers');

      var data = {
                 correct : "2",
                 incorrect : "3",
                 totals : "2"
              }
      ref.push(data);
      //end here

      this.myAnswers.push({
         correct:this.correct,
         incorrect:this.incorrect,
         totals:this.totals
      })
      console.log(this.myAnswers)
   });
  }

  submitScore(){
    var ref = firebase.database().ref().child("Scores");
    ref.on ("child_added", snap =>{
       this.initialInput = snap.child("name").val();
       this.scores = snap.child("score").val();

       //for creating database remove after use
       var database = firebase.database();
       var ref = database.ref('Scores');

      var data = {
                 name : "fanaMoore",
                 score : "4"
              }
      ref.push(data);
      //end here

       this.myScores.push({
          initialInput:this.initialInput,
          scores:this.scores
       })

       console.log(this.myScores)
    });
 }

  gotData(){
     return this.CatListing;
  }
  
  getQuestions(){
    return  this.Questions;
  }
  getAnsdetails(){
    return this.Answers;
  }

  getOption(){
    return this.Options;
  }

  getScores(){
    return this.myScores;
  }

  gotThem(){
    return this.showAll;
  }
  getAnswers(){
    return this.myAnswers;
  }
  
    resetPassword(email){
      console.log(email)
  
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        // Sign-out successful.
        console.log("password send")
      }).catch((error) => {
        // An error happened.
        console.log("try again...")
      });
    }
  
    logout(){
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logged out")
      }).catch((error) => {
        // An error happened.
        console.log("try again...")
      });
    }
}
