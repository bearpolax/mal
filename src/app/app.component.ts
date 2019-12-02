import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './services/auth.service';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  activeMenu: string;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Pietro',
      icon: 'logo-apple',
      url: '/home',
    },
    {
      title: 'Ribeiro',
      icon: 'logo-google',
      url: '/register'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AngularFireAuth,
    public user: UserService,
    public router: Router,
    private menu: MenuController) {
    }
    async signOut(){
      await this.afAuth.auth.signOut();
      return this.router.navigate(['/login']);
    }
        
    
  
}
