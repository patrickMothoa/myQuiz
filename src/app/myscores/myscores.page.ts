import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-myscores',
  templateUrl: './myscores.page.html',
  styleUrls: ['./myscores.page.scss'],
})
export class MyscoresPage implements OnInit {

  myscores = [];
  constructor(public quizservice : QuizerService) {
    this.myscores = this.quizservice.getScores();
   }

  ngOnInit() {
  }

  getScores(){
    this.quizservice.getScores();
  }
}
