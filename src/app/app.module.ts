import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Router
import { RouterModule } from '@angular/router';

// Tool Bar

// MatToolbar
import { MatToolbarModule } from '@angular/material/toolbar';
// MatIcon
import { MatIconModule } from '@angular/material/icon';
// MatMenu
import { MatMenuModule } from '@angular/material/menu';
// BrowserAnimations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MatBadge
import { MatBadgeModule } from '@angular/material/badge';
// MatCard
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

// Components

// Products
// Products List
import { ProductsListComponent } from './components/products/products-list/products-list.component';
// Product Item
import { ProductItemComponent } from './components/products/product-item/product-item.component';
// Product Details
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

// Shopping Cart
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// Page not Found
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// About Us
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ProductDetailsComponent,
    ProductItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent},
      { path: 'productlist', redirectTo: '/products', pathMatch: 'full' },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: ShoppingCartComponent},
      { path: 'aboutUs', component: AboutUsComponent},
      { path: '', redirectTo: '/products', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent}
    ]),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
