import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import {AppComponent} from './app.component';
;

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  API_KEY:string = 'AIzaSyDiWkBCSNh9EEm-FBSvnxvb5HGj4DTwOWs';
  constructor(private httpClient: HttpClient) { }

  page:any;

  public getRestaurant(){
    return this.httpClient.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${document.getElementById("search1").getAttribute('ng-reflect-model')}&key=${this.API_KEY}`);
  }
  
    

  public setRestaurant (page:any)
  {
    this.page = page;
  }
  
  }

//-------------------changes

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestaurantService {
//   API_KEY:string = 'AIzaSyDiWkBCSNh9EEm-FBSvnxvb5HGj4DTwOWs';
//   constructor(private httpClient: HttpClient) { }
//   page:any;
//   public setRestaurant (page:any)
//     {
//     this.page = page;
//     }
  
//   }
