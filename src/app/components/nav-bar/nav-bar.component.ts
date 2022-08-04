import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  tempCategoreis: any;

  categories: any;

  constructor(private categoriesData: CategoriesService) {}

  ngOnInit(): void {
    this.getCategoreis();
  }

  getCategoreis() {
    this.categoriesData.getCategories().subscribe((res) => {
      this.tempCategoreis = res;
        this.categories = this.tempCategoreis.data;
     //   console.error(this.categories);
    });
  }
}
