import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-who-said',
  templateUrl: './who-said.page.html',
  styleUrls: ['./who-said.page.scss'],
})
export class WhoSaidPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  biko
  nkrumah
  nelson
  lithuli
  samora
  constructor(public quizservice : QuizerService ) {}

  // for biko
  getBiko(event){
  this.biko = event.detail.value;
  }

  //for nkrumah
  getNkrumah(event){
  this.nkrumah = event.detail.value
  }
  
  //for mandela
  getNelson(event){
  this.nelson = event.detail.value
  }

  //Lithuli
  getLithuli(event){
    this.lithuli = event.detail.value
  }

  //samora
  getSamora(event){
    this.samora = event.detail.value
  }

}
