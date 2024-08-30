/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : EBookStore This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPaymentsPage } from './select-payments.page';

describe('SelectPaymentsPage', () => {
  let component: SelectPaymentsPage;
  let fixture: ComponentFixture<SelectPaymentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
