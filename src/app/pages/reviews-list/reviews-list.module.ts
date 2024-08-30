/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsListPageRoutingModule } from './reviews-list-routing.module';

import { ReviewsListPage } from './reviews-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsListPageRoutingModule
  ],
  declarations: [ReviewsListPage]
})
export class ReviewsListPageModule { }
