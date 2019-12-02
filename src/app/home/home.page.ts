import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {
    this.menu.enable(true);
  }

}
