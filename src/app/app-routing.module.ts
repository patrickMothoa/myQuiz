import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'who-said', loadChildren: './who-said/who-said.module#WhoSaidPageModule' },
  { path: 'play-q', loadChildren: './play-q/play-q.module#PlayQPageModule' },
  { path: 'myscores', loadChildren: './myscores/myscores.module#MyscoresPageModule' },
  { path: 'profiles', loadChildren: './profiles/profiles.module#ProfilesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
