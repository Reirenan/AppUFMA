/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss'],
})
export class BookInfoPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  name: any = '';
  cover: any = '';
  author: any = '';
  price: any = '';
  year: any = '';
  loaded: boolean = false;

  writeRate: any = 2;
  slideOptStores = {
    initialSlide: 0,
    slidesPerView: 2.4,
  };
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

  changeReview(num: any) {
    this.writeRate = num;
  }

  onBack() {
    this.util.onBack();
  }

  onBookInfo(name: string) {
    const param: NavigationExtras = {
      queryParams: {
        name: name
      }
    };
    this.util.navigateToPage('book-info', param);
    this.content.scrollToTop(5);
  }

  onAbout() {
    this.util.navigateToPage('about-book');
  }

  onReviewList() {
    this.util.navigateToPage('reviews-list');
  }

  onPayment() {
    const param: NavigationExtras = {
      queryParams: {
        name: this.name
      }
    };
    this.util.navigateToPage('select-payments', param);
  }
}
