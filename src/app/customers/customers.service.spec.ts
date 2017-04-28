import { TestBed, inject } from '@angular/core/testing';

import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersService]
    });
  });

  it('should ...', inject([CustomersService], (service: CustomersService) => {
    expect(service).toBeTruthy();
  }));
});
