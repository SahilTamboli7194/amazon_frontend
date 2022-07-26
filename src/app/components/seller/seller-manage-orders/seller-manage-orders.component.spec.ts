import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerManageOrdersComponent } from './seller-manage-orders.component';

describe('SellerManageOrdersComponent', () => {
  let component: SellerManageOrdersComponent;
  let fixture: ComponentFixture<SellerManageOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerManageOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerManageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
