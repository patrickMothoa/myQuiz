import { Component, OnInit } from '@angular/core';
import { QuizerService } from '../quizer.service';
import { AlertController, ToastController } from '@ionic/angular';
import {LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

public loginForm: FormGroup;
public loading: HTMLIonLoadingElement;

  email :string ="";
  password : string ="";
    constructor( public quizservice : QuizerService, public alertController: AlertController, public formBuilder: FormBuilder,public loadingCtrl: LoadingController,  private router: Router, public toastController: ToastController) {
      
      this.loginForm = this.formBuilder.group({
        email: ['',
          Validators.compose([Validators.required, Validators.email])],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)]),
        ],
      });
     }
  
    ngOnInit() {
    }
  
    login(email, password){
      this.quizservice.SignIn(this.email, this.password).then((result)=>{
        if(result.operationType == "SignIn"){
          this.router.navigate(['/home']);
          this.presentToast();
        }
        else{
             this.presentAlert(result);
        }
       
      })
    }
  
    async presentAlert(user) {
      const alert = await this.alertController.create({
        header: 'incorrect credentials',
        subHeader: 'Login',
        message: user,
        buttons: ['OK']
      });
    
      await alert.present();
    }
    
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'logged in succesfully.',
        duration: 5000,
        color: 'secondary',
        position: 'top'
      });
      toast.present();
    }

    ///// alert for password reset function ///////////
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
        // form hub
      //    constructor (formBuilders : FormBuilder){
  //    this.myForm = formBuilders.group({
  //     email : ["",Validators.email],
  //     password : ['',Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')],
  //   });

  //   const confirmPasswordControl = new FormControl('', {
  //    validators: sameValueAs(this.myForm, 'password')
  //  });

  //  this.myForm.addControl('passconfirm', confirmPasswordControl); 

  //  function sameValueAs(group: FormGroup, controlName: string): ValidatorFn {
  //    return (control: FormControl) => {
  //          const myValue = control.value;
  //          const compareValue = group.controls[controlName].value;
   
  //          return (myValue === compareValue) ? null : {valueDifferentFrom:controlName};
   
  //    };
  //  }

}
