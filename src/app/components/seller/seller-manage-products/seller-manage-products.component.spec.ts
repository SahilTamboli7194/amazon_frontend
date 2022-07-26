import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerManageProductsComponent } from './seller-manage-products.component';

describe('SellerManageProductsComponent', () => {
  let component: SellerManageProductsComponent;
  let fixture: ComponentFixture<SellerManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerManageProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
