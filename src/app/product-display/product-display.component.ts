import { Component, OnInit } from '@angular/core';
//import category data from json file (both product and category)
import categoriesData from '../../assets/categories.json';
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})

export class ProductDisplayComponent implements OnInit{
  //Declare and initialize variables
  categories: any[] = [];
  products: any[] = [];
  ngOnInit(): void {
    this.categories = categoriesData;
    this.products = productsData;
  }
  //get category based on categoryId
  getCategory(categoryId: number): string {
    const category = this.categories.find(category => category.id === categoryId);
    return category.name;
  }
}
