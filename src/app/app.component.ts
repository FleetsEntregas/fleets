import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Entregas',
      url: '/inicio',
      icon: 'paper-plane'
    },
    {
      title: 'Financeiro',
      url: '/inicio',
      icon: 'wallet'
    },
    {
      title: 'Configurações',
      url: '/inicio',
      icon: 'settings'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
