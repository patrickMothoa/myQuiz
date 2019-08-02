import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email 
  password
    constructor( public quizservice : QuizerService, public alertController: AlertController) { }
  
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
