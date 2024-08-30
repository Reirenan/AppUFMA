/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute } from '@angular/router';
import { SuccessPaymentsPage } from '../success-payments/success-payments.page';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.page.html',
  styleUrls: ['./payment-summary.page.scss'],
})
export class PaymentSummaryPage implements OnInit {
  name: any = '';
  cover: any = '';
  author: any = '';
  price: any = '';
  year: any = '';
  loaded: boolean = false;
  constructor(
    public util: UtilService,
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {
    this.route.queryParams.subscribe((data: any) => {
      setTimeout(() => {
        this.name = data.name;
        const info = this.util.bookesList.filter(x => x.title == this.name);
        console.log(info);
        if (info && info.length > 0) {
          this.name = info[0].title;
          this.cover = info[0].imageLink;
          this.author = info[0].author;
          this.price = info[0].pages;
          this.year = info[0].year;
        }
        this.loaded = true;
      }, 1000);
    });
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SuccessPaymentsPage,
      cssClass: 'success-modal'
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      this.util.navigateRoot('/tabs');
    });
    await modal.present();
  }

}
