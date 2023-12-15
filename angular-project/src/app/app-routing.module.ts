import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FoodViewComponent } from './pages/food/food-view/food-view.component';

const routes: Routes = [
  {path:'',pathMatch:"full",component:HomeComponent,},
  {path:"food/:id",component:FoodViewComponent},
  {path:"cart",component:CartComponent},
  {path:"search",component:SearchComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
``
