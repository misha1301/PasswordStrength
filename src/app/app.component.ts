import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataOfPassword = '';

  read(data:string){
    this.dataOfPassword = data;
  }
}
