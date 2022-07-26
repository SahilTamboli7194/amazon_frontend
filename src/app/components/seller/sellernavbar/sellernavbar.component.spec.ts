import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellernavbarComponent } from './sellernavbar.component';

describe('SellernavbarComponent', () => {
  let component: SellernavbarComponent;
  let fixture: ComponentFixture<SellernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
