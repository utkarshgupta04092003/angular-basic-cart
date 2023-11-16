import { Component , Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vegetable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegetable.component.html',
  styleUrl: './vegetable.component.css'
})
export class VegetableComponent {

  @Input() counter!:number;

  @Output() updateCounter: EventEmitter<number> = new EventEmitter();

  addPotato(){
    this.counter = this.counter+100;
    this.updateCounter.emit(this.counter);
  }
  minusPotato(){
    this.counter = this.counter-100;
    this.updateCounter.emit(this.counter);
  }
  addCabbage(){
    this.counter = this.counter+200;
    this.updateCounter.emit(this.counter);
  }
  
  minusCabbage(){
    this.counter = this.counter-200;
    this.updateCounter.emit(this.counter);
  }
  

}
