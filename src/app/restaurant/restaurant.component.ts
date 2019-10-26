import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  currentRestaurant: any;
  results;
  constructor(private apiService: RestaurantService) { }
  showPage: boolean;
  ngOnInit() {
    this.apiService.getRestaurant().subscribe((data)=>{
      console.log(data);
      this.results = data['results'];
    })
  }
  viewPage(restaurant)
  {
    this.showPage=true;
    this.currentRestaurant=restaurant;
    this.apiService.setRestaurant(restaurant);
  }
  backtoSearch()
  {
    this.showPage=false;
  }


}
