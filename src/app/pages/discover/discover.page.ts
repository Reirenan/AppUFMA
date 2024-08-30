/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  slideOptStores = {
    initialSlide: 0,
    slidesPerView: 2.4,
  };
  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
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
