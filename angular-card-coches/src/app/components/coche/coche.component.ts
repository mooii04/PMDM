import { Component } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrl: './coche.component.css'
})
export class CocheComponent {

  nombre = 'Tesla Model X';
  tipo = 'Automatic/Manual';
  precio = 298;
  img = 'https://astarastore.imgix.net/hero_asset/file/126647/verde.png?&auto=compress,format&fit=crop&max-h=578&max-w=1030&min-h=578&min-w=1030&w=340';

}
