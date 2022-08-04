import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Prodcut} from 'src/app/classes/prodcut';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  userId: any;
  tempProduct: any;
  product = new Prodcut();
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params;
    this.getProduct(this.userId.id);
  }

  getProduct(data: any) {
    this.productService.getProduct(this.userId.id).subscribe((res) => {
      this.tempProduct = res;
      this.product = this.tempProduct.product;
      console.log(this.product);
    });
  }
}
