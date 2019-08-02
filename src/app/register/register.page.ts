import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name
  email
  password
  age
  gender
  constructor( public quizservice : QuizerService) { }

  ngOnInit() {
  }

  getGender(event){
    this.gender = event.detail.value
  }
  
  register(){
    this.quizservice.SignUp( this.email, this.password, this.name, this.age, this.gender)
  }

}
