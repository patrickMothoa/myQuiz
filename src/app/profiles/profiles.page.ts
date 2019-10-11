import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { QuizerService } from '../quizer.service';
import { Router } from '@angular/router';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import * as firebase from 'firebase'

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
    proPic

    Userprofiles
    Userprofilez



    
    IDs

  constructor(public quizservice : QuizerService,private camera: Camera, private router: Router,private photoLibrary: PhotoLibrary) {
    this.Userprofiles = this.quizservice.Getprofiles();
    this.Userprofilez = this.quizservice.QuizProfiles();

    firebase.auth().onAuthStateChanged((users)=>{
      if(users){
        this.IDs = users.uid
      }else{
        this.router.navigate(['/profiles'])
      }
    })

   }


  ngOnInit() {
  }

  QuizProfiles(){
    this.quizservice. QuizProfiles();
  }

  clearArray(array) {
    for (let i = 0; i < array.length; i++) {
      array.splice(i);
  }
  }

PhotosLib(){
  this.photoLibrary.requestAuthorization().then(() => {
    this.photoLibrary.getLibrary().subscribe({
      next: library => {
        library.forEach(function(libraryItem) {
          console.log(libraryItem.id);          // ID of the photo
          console.log(libraryItem.photoURL);    // Cross-platform access to photo
          console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
          console.log(libraryItem.fileName);
          console.log(libraryItem.width);
          console.log(libraryItem.height);
          console.log(libraryItem.creationDate);
          console.log(libraryItem.latitude);
          console.log(libraryItem.longitude);
          console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
        });
      },
      error: err => { console.log('could not get photos'); },
      complete: () => { console.log('done getting photos'); }
    });
  })
  .catch(err => console.log('permissions weren\'t granted'));
}

  Profilepic () {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.proPic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
