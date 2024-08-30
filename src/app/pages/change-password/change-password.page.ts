/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ResetSuccessPage } from '../reset-success/reset-success.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  passwordView: boolean = false;
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }
  changePasswordViews() {
    this.passwordView = !this.passwordView;
  }


  async onNext() {
    const modal = await this.modalController.create({
      component: ResetSuccessPage,
      cssClass: 'success-modal'
    });
    modal.onDidDismiss().then((data: any) => {
      this.util.navigateRoot('/tabs');
    });
    await modal.present();
  }

}
