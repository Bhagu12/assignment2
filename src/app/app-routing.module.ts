import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent} from './restaurant/restaurant.component';
import { AppComponent } from './app.component';
import { RestaurantpageComponent } from './restaurantpage/restaurantpage.component';

const routes: Routes = [
  {path:'restaurant', component: RestaurantComponent},
  {path:'restaurantpage', component: RestaurantpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//-----------changes

// const routes: Routes = [
//   {path:'place/:loc', component: RestaurantComponent},
//   {path:'param-component', component: RestaurantpageComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
