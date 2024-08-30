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

import { GenrePageRoutingModule } from './genre-routing.module';

import { GenrePage } from './genre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenrePageRoutingModule
  ],
  declarations: [GenrePage]
})
export class GenrePageModule { }
