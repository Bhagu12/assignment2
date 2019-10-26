import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurantpage',
  templateUrl: './restaurantpage.component.html',
  styleUrls: ['./restaurantpage.component.css']
})
export class RestaurantpageComponent implements OnInit {

  constructor(private _Prof:RestaurantService) { }
  currentRestaurant: any;
  ngOnInit() {
    this.currentRestaurant = this._Prof.page;
    console.log(this.currentRestaurant.name);
    console.log(this.currentRestaurant.photo_reference);
  }

}
