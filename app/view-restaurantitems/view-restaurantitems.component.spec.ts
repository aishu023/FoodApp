import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantitemsComponent } from './view-restaurantitems.component';

describe('ViewRestaurantitemsComponent', () => {
  let component: ViewRestaurantitemsComponent;
  let fixture: ComponentFixture<ViewRestaurantitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurantitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurantitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
