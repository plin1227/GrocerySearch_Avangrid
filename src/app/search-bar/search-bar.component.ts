import { Component, OnInit} from '@angular/core';
//import data from product.json and category.json
import productsData from '../../assets/products.json';
import categoriesData from '../../assets/categories.json';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit{
  //decalre & initialize variables
  searchTerm: string = '';
  products: any[] = [];
  categories: any[] = [];
  filteredProducts: any[] = [];
  displayResult: boolean = false;
  matchFound: boolean = false;
  price: string = '';
  category: string = '';
  source: string ='';

  //Store json data
  ngOnInit(): void {
    this.products = productsData;
    this.categories = categoriesData;
  }
 
  //Method for searching process (filter words)
  onSearch(): void {
    this.filteredProducts = this.products.filter(prod => prod.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    if(this.searchTerm == '') {
      this.filteredProducts = [];
    }
    this.matchFound = false;
    this.displayResult = false;
  }

  //Methold for submitting (search button)
  onSubmit() {
    this.filteredProducts = [];
    this.displayResult = true;
    if(this.products.find(prod => prod.name.toLowerCase() === this.searchTerm.toLowerCase())) {
        //store product data if match is found
        this.matchFound = true;
        const product = this.products.find(prod => prod.name.toLowerCase() === this.searchTerm.toLowerCase());
        this.price = product.price;
        this.source = product.image;
        this.category = this.categories.find(category => category.id === product.categoryId).name;
    }
  }
}