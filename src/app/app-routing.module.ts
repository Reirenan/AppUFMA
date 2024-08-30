/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'testefunc',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about-book',
    loadChildren: () => import('./pages/about-book/about-book.module').then(m => m.AboutBookPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'account-info',
    loadChildren: () => import('./pages/account-info/account-info.module').then(m => m.AccountInfoPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then(m => m.AddCardPageModule)
  },
  {
    path: 'book-info',
    loadChildren: () => import('./pages/book-info/book-info.module').then(m => m.BookInfoPageModule)
  },
  {
    path: 'by-genre',
    loadChildren: () => import('./pages/by-genre/by-genre.module').then(m => m.ByGenrePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./pages/discover/discover.module').then(m => m.DiscoverPageModule)
  },
  {
    path: 'filter-modal',
    loadChildren: () => import('./pages/filter-modal/filter-modal.module').then(m => m.FilterModalPageModule)
  },
  {
    path: 'genre',
    loadChildren: () => import('./pages/genre/genre.module').then(m => m.GenrePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'info-sliders',
    loadChildren: () => import('./pages/info-sliders/info-sliders.module').then(m => m.InfoSlidersPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./pages/invite-friends/invite-friends.module').then(m => m.InviteFriendsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then(m => m.LanguagesPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('./pages/notification-settings/notification-settings.module').then(m => m.NotificationSettingsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'payment-summary',
    loadChildren: () => import('./pages/payment-summary/payment-summary.module').then(m => m.PaymentSummaryPageModule)
  },
  {
    path: 'purchased',
    loadChildren: () => import('./pages/purchased/purchased.module').then(m => m.PurchasedPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'reset-success',
    loadChildren: () => import('./pages/reset-success/reset-success.module').then(m => m.ResetSuccessPageModule)
  },
  {
    path: 'reviews-list',
    loadChildren: () => import('./pages/reviews-list/reviews-list.module').then(m => m.ReviewsListPageModule)
  },
  {
    path: 'security-settings',
    loadChildren: () => import('./pages/security-settings/security-settings.module').then(m => m.SecuritySettingsPageModule)
  },
  {
    path: 'select-payments',
    loadChildren: () => import('./pages/select-payments/select-payments.module').then(m => m.SelectPaymentsPageModule)
  },
  {
    path: 'success-payments',
    loadChildren: () => import('./pages/success-payments/success-payments.module').then(m => m.SuccessPaymentsPageModule)
  },
  {
    path: 'success-register',
    loadChildren: () => import('./pages/success-register/success-register.module').then(m => m.SuccessRegisterPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
