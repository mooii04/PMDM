import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  addNum: number = 0;
  result: number = 0;
  sumar() {
    this.result = this.addNum + this.addNum;  
  }

  restar() {
    //this.result = this.addNum - this.addNum;
  }


}