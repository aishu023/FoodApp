import { TestBed } from '@angular/core/testing';

import { RestaurantserviceOperationsService } from './restaurantservice-operations.service';

describe('RestaurantserviceOperationsService', () => {
  let service: RestaurantserviceOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantserviceOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
