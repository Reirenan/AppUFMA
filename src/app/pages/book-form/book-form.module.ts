/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFormPageRoutingModule } from './book-form-routing.module';

import { BookFormPage } from './book-form.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFormPageRoutingModule
  ],
  declarations: [BookFormPage]
})
export class BookFormPageModule { }
