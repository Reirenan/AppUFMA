/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormPage } from './book-form.page';

const routes: Routes = [
  {
    path: '',
    component: BookFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFormPageRoutingModule { }
