import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantpageComponent } from './restaurantpage.component';

describe('RestaurantpageComponent', () => {
  let component: RestaurantpageComponent;
  let fixture: ComponentFixture<RestaurantpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
