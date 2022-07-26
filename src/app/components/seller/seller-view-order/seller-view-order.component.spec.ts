import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewOrderComponent } from './seller-view-order.component';

describe('SellerViewOrderComponent', () => {
  let component: SellerViewOrderComponent;
  let fixture: ComponentFixture<SellerViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerViewOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
