import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  value;
  onEnter(value: string){
    this.value = value;
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  title = 'my-app';
  onSubmit(){  
  }


}