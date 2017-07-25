import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<router-outlet></router-outlet>`,
})
export class AppComponent {
  
  
  birthday = new Date(1988, 3, 15); // April 15, 1988
  
}
