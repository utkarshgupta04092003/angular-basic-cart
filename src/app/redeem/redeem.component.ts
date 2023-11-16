import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { count } from 'node:console';

@Component({
  selector: 'app-redeem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redeem.component.html',
  styleUrl: './redeem.component.css'
})
export class RedeemComponent {

  @Input() counter!:number;
  @Output() changeCounter: EventEmitter<number> = new EventEmitter();

  redeemCounter(){
    if(this.counter > 400){
      this.counter = this.counter-100;
      this.changeCounter.emit(this.counter);
    }
  }

}
