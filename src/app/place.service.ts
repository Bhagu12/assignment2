// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlaceService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppComponent} from './app.component';
@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  
   API_KEY:string ="AIzaSyBf817FqdYRjed-pJcVf04e_Z1h3I7BIOE";
  constructor(private httpClient: HttpClient) { }
  
  public getPlace(loc:string){
    console.log("getPlace "+ loc)
   //return this.httpClient.get<Config>("http://ec2-18-224-153-212.us-east-2.compute.amazonaws.com/place/"+loc);
   return this.httpClient.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${document.getElementById("search1").getAttribute('ng-reflect-model')}&key=${this.API_KEY}`);
  }

  detail:any;
  public setDetail (detail:any)
    {
    this.detail = detail;
    }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
