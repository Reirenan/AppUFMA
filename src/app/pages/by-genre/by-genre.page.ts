/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ModalController } from '@ionic/angular';
import { FilterModalPage } from '../filter-modal/filter-modal.page';

@Component({
  selector: 'app-by-genre',
  templateUrl: './by-genre.page.html',
  styleUrls: ['./by-genre.page.scss'],
})
export class ByGenrePage implements OnInit {
  name: any = '';
  type: any = 'row';
  constructor(
    public util: UtilService,
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {
    this.route.queryParams.subscribe((data: any) => {
      this.name = data.name;
    });
  }

  ngOnInit() {
  }

  changeType(name: string) {
    this.type = name;
  }

  onBack() {
    this.util.onBack();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModalPage,
    });
    await modal.present();
  }

  onBookInfo(name: string) {
    const param: NavigationExtras = {
      queryParams: {
        name: name
      }
    };
    this.util.navigateToPage('book-info', param);
  }
}
