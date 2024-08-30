/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { NavigationExtras } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOptStores = {
    initialSlide: 0,
    slidesPerView: 2.4,
  };
  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onAllGenre() {
    this.util.navigateToPage('/genre');
  }

  onNotification() {
    this.util.navigateToPage('notifications');
  }

  byGenre(name: string) {
    const param: NavigationExtras = {
      queryParams: {
        name: name
      }
    };
    this.util.navigateToPage('by-genre', param);
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
