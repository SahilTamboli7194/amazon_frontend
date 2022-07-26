import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAccountEditComponent } from './seller-account-edit.component';

describe('SellerAccountEditComponent', () => {
  let component: SellerAccountEditComponent;
  let fixture: ComponentFixture<SellerAccountEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAccountEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAccountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
