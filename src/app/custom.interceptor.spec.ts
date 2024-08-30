import { TestBed } from '@angular/core/testing';

import { customInterceptor } from './custom.interceptor';

describe('AuthService', () => {
  let service: customInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(customInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
