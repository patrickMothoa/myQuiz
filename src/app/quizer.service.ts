import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
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

 private myResults = []
 private CatListing = [];
 private myScores = [];
 private Questions =[];
 private Answers = [];

 private Options = [];

 private showAll = [];
 PlayerScores = [];
 Userprofiles = [];
 
 cal_name;
 cal_age

 catKey
/////
OptionMe
Counter = 0;
score

Quizques
QuizAns
Quizvalues
////
finalscore
///////
names
ages
genders
emails


/////
_quiz: any;
quizScore: number = 0;
private myAnswers = [];
 ////
 childtrue;childfalse
 childKey
//for scores
userAnswers
  constructor() { }

   getUser(){
     return this.userId;
   }

  getkeya(){
    return this. catKey;
  }

   //user logins
   SignIn(email, password){
   return firebase.auth().signInWithEmailAndPassword(email, password).then((result)=>{
      if(result){
       // console.log("user is logged in")
        return result;
      }
     
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return errorMessage;
      // ...
    });
  }

//user regisetering
SignUp(email, password, name , age, gender){
  return firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
    if (user) {
      console.log(user)
    console.log(user['user'].uid)
  
    this.userId = user['user'].uid;
    this.userEmail = user['user'].email;
  
    firebase.database().ref('user/' + this.userId).set({
      name : name,
      email : email,
      age : age,
      gender: gender,
    })
    return user;
    }
  }).catch((error)  => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  return errorMessage;
  // ...
});
  }
///////////////   getting categories from db //////////////////
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

  
    ///// use this key to referennce and get correct questions on cat id ////
    setQuiz(key){
      this.catKey = key
    }
    //////////////
  //for questions
      playQuiz(){
        ///////////////////////  retriving values from my database   /////////////
              var rootRef = firebase.database().ref("QuizAnswers/" + this.catKey)
              rootRef.once('value', (snapshot) =>{
                const value = snapshot.val();

                var childKey = snapshot.key;

                for (const key in value){
                  this.Counter++;
                  this.showAll.push({
                    counter: this.Counter,
                    key: key,
                    Quizques  : key,
                    QuizAns : Object.keys(value[key]),
                    Quizvalues : Object.values(value[key])

                   // OptionMe: Object.keys(value[key])
                  });
                    console.log(this.showAll)
                    console.log(key);
                    console.log(value)
                  //  this.OptionMe = Object.keys(value[key]);
                }
              });

              ///////////////////////////////////////////////// Legends Code //////
              //  var childKey = snapshot.key;
               //   console.log(childKey)
              //   snapshot.forEach((childSnapshot) =>
              //   {
              //     this.childfalse = "";
              //     this.childtrue = "";
              //      this.childKey = childSnapshot.key;
              //     console.log(childSnapshot.key)
              //     console.log(childKey)

              // this.childfalse = childSnapshot.child("false").val();
              // this.childtrue = childSnapshot.child("true").val();

              //      this.Questions = [];
              //     this.Questions.push({childSnapshot:this.childKey})
              //     console.log(this.Questions);

              //     this.Answers.splice(0,1)
              //     this.Answers = [];
              //     this.Answers.push({
              //       true: this.childtrue
              //     })
              //     this.Options.splice(0,1)
              //     this.Options=[]
              //     this.Options.push({false:this.childfalse})

              //     this.showAll.push({childSnapshot:this.Questions[0].childSnapshot,true:this.Answers[0].true,false:this.Options[0].false})
              //      console.log(this.showAll) 
              // })////////////////////////////////////////////////////////////////////////////////////////
            //  })
              
                  console.log(this.OptionMe); 
            }

  /////////////// this  moved from play.ts ///////////////////////////////////   
  submitScore(UserAnswers, QuizAns){

  }

  UserAnswers( QuizAns: boolean,Options : boolean ) {	

      console.log(this.Answers)
    }
////////////// xxxx
getUserId() {
  var users = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  if (users != null) {
    name = users.displayName;
    email = users.email;
    uid = users.uid;
  }
  return uid
 }
/////////////////// geting questions and ans all
allResults(userId) {
  this.Counter = 0;
  let resultsquestion;
  let gameID;
  let values;
  this.clearArray(this.myResults);
 return firebase.database().ref().child('Results/' + userId + name).once('value').then( (snapshot) => {
      const values = snapshot.val();
      console.log(values);
      return snapshot.val();
    });
 }
 ///////////////////////////////////////////////
///////////////// get all play
    GetAll(){
      var checking = firebase.database().ref().child('Results/' + this.userId + '/'+ this.catKey)
      checking.on('value', (snapshot) =>{
        const value = snapshot.val();
        for (const key in value){
          this.Counter++;
          this.Options.push({
            counter: this.Counter,
            key: key,
            Quizques  : key,
            StageResult : this.quizScore,
           // MyAnswers : Object.keys(value[key]),
            score : Object.keys(value[key]),
  
          }); 
        }
      });
    }

    //////////////// for retriving scores from db to display in myscores.page//////////
    GetScores(){
      var checking = firebase.database().ref().child('OurScores/'+ this.userId + '/'+ this.catKey )
      checking.on('value', (snapshot) =>{
        let Counter;
        const keys = snapshot.val()
        console.log(keys)

        // for (const key  in keys ){
        //   console.log(Object.values(keys[key]))
        //   this.PlayerScores.push({
        //     key:key,
        //     gameid: key,
        //     catId : Object.keys(keys[key]),
        //     score: Object.values(keys[key])
        //   }); 
        // }

        /////////////
        for (let key in keys) {
          Counter = 1;
          var categ = key
          for (let key2 in keys[key]) {
            for (let key3 in keys[key][key2]) {
              this.PlayerScores.push({
                counter: Counter++,
                catId: categ,
                totalScore : key3,
                options: (keys[key][key2][key3]),
              });
            }
          }
          console.log(this.PlayerScores);
        }
      });
    }

    ///////// user profiles
    QuizProfiles(){
      this.userId = this.getUser()
            const newRef = firebase.database().ref('user/' + this.userId)
            newRef.on('value', (snapshot) =>{
              const users = snapshot.val();
               
              this.names = users.name;
              this.ages = users.age;
              this.genders = users.gender;
              this.emails = users.email;
              
                this.Userprofiles.push({
                 Name: this.names,
                 Age: this.ages,
                 Gender : this.genders,
                 Email : this.emails
                })    
            })
            return this.Userprofiles
          }

  clearArray(array) {
            for (let i = 0; i < array.length; i++) {
              array.splice(i);
     }
 }

  gotData(){
     return this.CatListing;
  }

  Getprofiles(){
    return this.Userprofiles;
  }

  gotTotal(){
    return this.PlayerScores;
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
