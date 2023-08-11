import { Component, OnInit } from '@angular/core';
//import category data from json file
import categoriesData from '../../assets/categories.json';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})

export class CategoryDisplayComponent implements OnInit {
  //Declare and initialize variables
  categories: any[] = [];
  ngOnInit(): void {
    this.categories = categoriesData;
  }
}
