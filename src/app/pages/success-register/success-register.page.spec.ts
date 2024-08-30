/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessRegisterPage } from './success-register.page';

describe('SuccessRegisterPage', () => {
  let component: SuccessRegisterPage;
  let fixture: ComponentFixture<SuccessRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccessRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
