import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  tempProducts: any;

  products: any;

  constructor(private productServices: ProductsService) {}

  ngOnInit(): void {
    this.getProdcuts();
  }

  getProdcuts() {
    this.productServices.getProducts().subscribe((res) => {
     // console.warn(res);
      this.tempProducts = res;
      this.products = this.tempProducts.products.data;
    //  console.warn(this.products);
    });
  }
}
