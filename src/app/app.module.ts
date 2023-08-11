import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    CategoryDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
