import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { AlertController } from '@ionic/angular';
// import {FormsModule} from '@angular/forms';
// import {LoadingController, AlertController } from '@ionic/angular';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// public loginForm: FormGroup;
// public loading: HTMLIonLoadingElement;

  email :string ="";
  password : string ="";
    constructor( public quizservice : QuizerService, public alertController: AlertController,) {
      // , public formBuilder: FormBuilder,public loadingCtrl: LoadingController,  private router: Router
      // this.loginForm = this.formBuilder.group({
      //   email: ['',
      //     Validators.compose([Validators.required, Validators.email])],
      //   password: [
      //     '',
      //     Validators.compose([Validators.required, Validators.minLength(8)]),
      //   ],
      // });
     }
  
    ngOnInit() {
    }
  
    login(email, password){
      this.quizservice.SignIn(this.email, this.password)
    }
  
  
    async resetpass() {
      const alert = await this.alertController.create({
        header: 'reset Password',
        inputs: [
          {
            name: 'email',
            type: 'email',
            placeholder: 'enter your email'
          }],
          buttons: [
            {
              text: 'Send',
              role: 'send',
              cssClass: 'secondary',
              handler: (email) => {
  
                this.quizservice.resetPassword(email.email)
                console.log('Confirm Ok');
              }
            }, {
              text: 'Cancel',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }
          ]
        });
    
        await alert.present();
      }

}
