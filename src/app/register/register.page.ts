import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { AlertController } from '@ionic/angular';
import {LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { userInfo } from 'os';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  public registerForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  name : string = "";
  email : string = "";
  password : string = "";
  age : string ="";
  gender : string = "";

  //user
  constructor( public quizservice : QuizerService, public alertController: AlertController, public formBuilder: FormBuilder,public loadingCtrl: LoadingController,  public router: Router, public toastController: ToastController) {

    this.registerForm = this.formBuilder.group({
      name : ['',
        Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z_-]{4,15}$')])],

        age : ['',
        Validators.compose([Validators.required, Validators.maxLength(3)])],

      gender : ['',
        Validators.compose([Validators.required])],
      

      email: ['',
        Validators.compose([Validators.required, Validators.email])],

      password: [
        '',
        Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],

    });
   }

  ngOnInit() {
  }

  getGender(event){
    this.gender = event.detail.value
  }
  
  register(){
    this.quizservice.SignUp( this.email, this.password, this.name, this.age, this.gender).then((user)=>{
      if(user.operationType == "signIn"){
        //console.log
        this.router.navigate(['/home']);
        this.presentToast();
      }
      else{
           this.presentAlert(user);
      }
    });
}

async presentAlert(user) {
  const alert = await this.alertController.create({
    header: 'incorrect credentials',
    subHeader: 'register',
    message: user,
    buttons: ['OK']
  });

  await alert.present();
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'registration succesful.',
    duration: 5000,
    color: 'secondary',
    position: 'top'
  });
  toast.present();
}

}
