import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrl: './barra-progreso.component.css'
})
export class BarraProgresoComponent {

  @Input() value: number = 90;
  @Input() color: string = '';

  getProgressBarType(value: number): string {
    if (value < 25) {
      return this.color = 'danger';
    } else if (value < 50) {
      return this.color = 'warning';
    } else if (value < 75) {
      return this.color = 'info';
    } else {
      return this.color = 'success';
    }
  }

}
