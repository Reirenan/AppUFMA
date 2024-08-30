/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-select-payments',
  templateUrl: './select-payments.page.html',
  styleUrls: ['./select-payments.page.scss'],
})
export class SelectPaymentsPage implements OnInit {
  name: any = '';
  cover: any = '';
  author: any = '';
  price: any = '';
  year: any = '';
  loaded: boolean = false;
  constructor(
    public util: UtilService,
    private route: ActivatedRoute
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

  onAddNewCard() {
    this.util.navigateToPage('add-card');
  }

  onPaymentSummary() {
    const param: NavigationExtras = {
      queryParams: {
        name: this.name
      }
    };
    this.util.navigateToPage('payment-summary', param);
  }
}
