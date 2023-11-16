import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { VegetableComponent } from './vegetable/vegetable.component';
import { RedeemComponent } from './redeem/redeem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RedeemComponent, VegetableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic-cart';
  counter = 100;

  updateCounter(c:number){
    this.counter = c;
  }
  changeCounter(c:number){
    this.counter = c;
  }


}
