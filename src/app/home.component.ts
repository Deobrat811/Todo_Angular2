import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './html/app.component.html',
  styleUrls:['./css/app.component.css']
})
export class HomeComponent {
  
  
  birthday = new Date(1988, 3, 15); // April 15, 1988
  
}
