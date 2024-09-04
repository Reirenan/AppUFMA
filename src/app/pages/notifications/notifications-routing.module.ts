/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPage } from './notifications.page';
import { AccountInfoPage } from '../account-info/account-info.page';
import { AccountPageModule } from '../account/account.module';
import { BookFormPage } from '../book-form/book-form.page';
import { BookFormPageModule } from '../book-form/book-form.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  },
  {
    path: 'account',
    component: AccountPageModule
  },
  {
    path: 'book-form',
    component: BookFormPageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule { }
