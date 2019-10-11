import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase'

@Component({
  selector: 'app-myscores',
  templateUrl: './myscores.page.html',
  styleUrls: ['./myscores.page.scss'],
})
export class MyscoresPage implements OnInit {

   // Get a reference to the database service
 database = firebase.database();

  myScores = []
  PlayerScores = [];
  Options = [];
  IDs



  constructor(public quizservice : QuizerService, private router: Router) {
    this.myScores= this.quizservice.gotTotal();
    this.PlayerScores= this.quizservice.gotTotal();
    this.Options = this.quizservice. getOption();

        ///////////////////////////////////////////////// shovara way

  this.IDs = this.quizservice.getUserId();
 // this.PlayerScores =  this.quizservice.getCat(this.IDs);
  this.clearArray(this. PlayerScores);

  this.quizservice.allResults(this.IDs ).then(data => {
    let Counter;
    this.clearArray(this.PlayerScores);

    for (let key in data) {
      Counter = 1;
      var categ = key
      for (let key2 in data[key]) {
        for (let key3 in data[key][key2]) {
          this.PlayerScores.push({
            counter: Counter++,
            catId: categ,
            Quizques : key3,
            options: (data[key][key2][key3]),
          });
        }
      }
      console.log(this.PlayerScores);
    }
  });

/////////////////////////////////////////////////
firebase.auth().onAuthStateChanged((users)=>{
  if(users){
    this.IDs = users.uid
  }else{
    this.router.navigate(['/myscores'])
  }
})
   }

  ngOnInit() {
  }


  GetAll(){
    this.quizservice.GetAll();
  }

  clearArray(array) {
    for (let i = 0; i < array.length; i++) {
      array.splice(i);
  }
  }

  GetScores(){
    this.quizservice.GetScores();
  }
}
