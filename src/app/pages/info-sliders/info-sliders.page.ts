/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { SuccessRegisterPage } from '../success-register/success-register.page';
import { ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';

register();
@Component({
  selector: 'app-info-sliders',
  templateUrl: './info-sliders.page.html',
  styleUrls: ['./info-sliders.page.scss'],
})
export class InfoSlidersPage implements OnInit {
  @ViewChild("swiper") swiper?: ElementRef<{ swiper: Swiper }>
  progressWidth: any = 0;
  activeIndex: any = 0;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    allowTouchMove: false
  };

  selectedAge: any = '25 - 29';
  ageRange: any[] = [
    "14 - 17",
    "18 - 24",
    "25 - 29",
    "30 - 34",
    "35 - 39",
    "40 - 44",
    "45 - 49",
    ">= 50"
  ];

  bookType: any[] = [
    "Adventure",
    "Classics",
    "Crime",
    "Fairy tales",
    "Fantasy",
    "Historical fiction",
    "Horror",
    "Humour and satire",
    "Literary fiction",
    "Mystery",
    "Poetry",
    "Plays",
    "Romance",
    "Science fiction",
    "Short stories",
    "Thrillers",
    "War",
    "Women’s fiction",
    "Young adult",
    "Autobiography",
    "Biography",
    "Essays",
    "Non-fiction",
    "Self-help"
  ];

  savedType: any[] = [];
  passwordView: boolean = false;
  constructor(
    public util: UtilService,
    private modalController: ModalController
  ) {
    setTimeout(() => {
      this.updateProgressWidth();
    }, 1000);
  }

  ngOnInit() {
  }

  changePasswordViews() {
    this.passwordView = !this.passwordView;
  }

  changeAge(name: string) {
    this.selectedAge = name;
  }

  onBack() {
    this.util.onBack();
  }

  changed() {
    this.activeIndex = this.swiper?.nativeElement.swiper.activeIndex;
    this.updateProgressWidth();
    // this.slides.getActiveIndex().then((data: any) => {
    //   this.activeIndex = data;
    //   console.log(this.activeIndex);
    //   this.updateProgressWidth();
    // });
  }

  updateProgressWidth() {
    let length = this.swiper?.nativeElement.swiper.slides.length ?? 0;
    this.progressWidth = ((this.activeIndex + 1) / length) * 100;
    // this.slides.length().then((length: any) => {
    //   console.log('slider length', length);
    //   this.progressWidth = ((this.activeIndex + 1) / length) * 100;
    // })
    console.log(this.progressWidth);
  }

  onNext() {
    if (this.swiper?.nativeElement.swiper.isEnd) {
      console.log('next page');
      this.presentModal();
    } else {
      this.swiper?.nativeElement.swiper.slideNext();
    }
    // this.slides.isEnd().then((data) => {
    //   console.log('isEnd', data);
    //   if (data == true) {
    //     console.log('next page');
    //     this.presentModal();
    //   } else {
    //     this.slides.slideNext().then((data: any) => {
    //       console.log(data);
    //     });
    //   }
    // });
  }

  saveBookType(item: any) {
    if (this.savedType.includes(item)) {
      this.savedType = this.savedType.filter(x => x != item);
    } else {
      this.savedType.push(item);
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SuccessRegisterPage,
      cssClass: 'success-modal'
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      this.util.navigateToPage('/login');
    });
    await modal.present();
  }
}
