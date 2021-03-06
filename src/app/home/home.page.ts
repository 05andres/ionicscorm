import {  HostListener,Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SecondPage } from '../modals/second/second.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }

  @HostListener('document:handleMe', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    console.log(`score : ${ev.detail}`);
  }



}
