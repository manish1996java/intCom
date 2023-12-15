import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom-pipe.pipe';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FoodViewComponent } from './pages/food/food-view/food-view.component';
import { ProdCardComponent } from './components/prod-card/prod-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    HomeComponent,
    FoodComponent,
    CartComponent,
    SearchComponent,
    PageNotFoundComponent,
    MainHeaderComponent,
    FoodViewComponent,
    ProdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
