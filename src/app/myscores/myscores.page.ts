import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-myscores',
  templateUrl: './myscores.page.html',
  styleUrls: ['./myscores.page.scss'],
})
export class MyscoresPage implements OnInit {

  PlayerScores = [];
  constructor(public quizservice : QuizerService) {
    this.PlayerScores = this.quizservice.gotTotal();
   }

  ngOnInit() {
  }

  GetScores(){
    this.quizservice.GetScores();
  }
}
