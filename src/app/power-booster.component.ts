import { Component } from '@angular/core';

@Component({
  selector: 'power-booster',
  template: `
    <h2>Power Booster</h2>
    <p><input [(ngModel)]="number"></p>
    <p><input [(ngModel)]="exponent"></p>
    <p>Super power boost: {{number | exponentialStrength: exponent}}</p>
  `
})
export class PowerBoosterComponent {
    number:any=2;
    exponent:any=10;
 }