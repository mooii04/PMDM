import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Student {
  numAlum: number;
  name: string;
  apellidos: string;
  nif: string;
  edad: number;
  curso: string;
}

const ELEMENT_DATA: Student[] = [
  { numAlum: 1, name: 'María Del Pilar', apellidos: 'Aguilar Díaz', nif: '12345678A', edad: 20, curso: '2º DAM' },
  { numAlum: 2, name: 'Cándida', apellidos: 'Alcantarilla Calado', nif: '12345678B', edad: 21, curso: '2º DAM' },
  { numAlum: 3, name: 'Francisco José', apellidos: 'Alcantarilla Calado', nif: '12345678C', edad: 22, curso: '2º DAM' },
  { numAlum: 4, name: 'Patricia', apellidos: 'Alonso Ayllón', nif: '12345678D', edad: 23, curso: '2º DAM' },
  { numAlum: 5, name: 'Adrián', apellidos: 'Ariza Ponce', nif: '12345678E', edad: 24, curso: '2º DAM' },
  { numAlum: 6, name: 'Pablo', apellidos: 'Cámara García', nif: '12345678F', edad: 25, curso: '2º DAM' },
  { numAlum: 7, name: 'Joaquín', apellidos: 'Carrascal Franco', nif: '12345678G', edad: 26, curso: '2º DAM' },
  { numAlum: 8, name: 'Álvaro', apellidos: 'Castilla Cano', nif: '12345678H', edad: 27, curso: '2º DAM' },
  { numAlum: 9, name: 'Bruno', apellidos: 'Delgado Herrero', nif: '12345678I', edad: 28, curso: '2º DAM' },
  { numAlum: 10, name: 'David', apellidos: 'Falla Urtiaga', nif: '12345678J', edad: 29, curso: '2º DAM' },
  { numAlum: 11, name: 'Lucas', apellidos: 'Falla Urtiaga', nif: '12345678K', edad: 30, curso: '2º DAM' },
  { numAlum: 12, name: 'Francisco Manuel', apellidos: 'Gamero Rodríguez', nif: '12345678L', edad: 31, curso: '2º DAM' },
  { numAlum: 13, name: 'Miguel', apellidos: 'Garfia Bermúdez', nif: '12345678M', edad: 32, curso: '2º DAM' },
  { numAlum: 14, name: 'Manuel', apellidos: 'Gómez Martín', nif: '12345678N', edad: 33, curso: '2º DAM' },
  { numAlum: 15, name: 'Sergio', apellidos: 'González Cortés', nif: '12345678O', edad: 34, curso: '2º DAM' },
  { numAlum: 16, name: 'Rafael Alexander', apellidos: 'Hernández Meléndez', nif: '12345678P', edad: 35, curso: '2º DAM' },
  { numAlum: 17, name: 'Álvaro', apellidos: 'Lorente Almán', nif: '12345678Q', edad: 36, curso: '2º DAM' },
  { numAlum: 18, name: 'Daniel', apellidos: 'Martínez León', nif: '12345678R', edad: 37, curso: '2º DAM' },
  { numAlum: 19, name: 'Víctor', apellidos: 'Medina Lejeune', nif: '12345678S', edad: 38, curso: '2º DAM' },
  { numAlum: 20, name: 'Pablo', apellidos: 'Méndez España', nif: '12345678T', edad: 39, curso: '2º DAM' },
  { numAlum: 21, name: 'María Luisa', apellidos: 'Merón Campillos', nif: '12345678U', edad: 40, curso: '2º DAM' },
  { numAlum: 22, name: 'Carlos', apellidos: 'Román Abad', nif: '12345678V', edad: 41, curso: '2º DAM' },
  { numAlum: 23, name: 'Carlos', apellidos: 'Ruiz López', nif: '12345678W', edad: 42, curso: '2º DAM' },
  { numAlum: 24, name: 'Pedro', apellidos: 'Sánchez Del Bot', nif: '12345678X', edad: 43, curso: '2º DAM' },
  { numAlum: 25, name: 'José Rafael', apellidos: 'Segura Rodríguez', nif: '12345678Y', edad: 44, curso: '2º DAM' },
  { numAlum: 26, name: 'David', apellidos: 'Sevillano Domínguez', nif: '12345678Z', edad: 45, curso: '2º DAM' },
  { numAlum: 27, name: 'Pablo', apellidos: 'Teyssiere Luque', nif: '12345678AA', edad: 46, curso: '2º DAM' },
  { numAlum: 28, name: 'Olga Isabel', apellidos: 'Valor Wu', nif: '12345678BB', edad: 47, curso: '2º DAM' },
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
})
export class TablaComponent {
  displayedColumns: string[] = ['numAlum', 'name', 'apellidos', 'nif', 'edad', 'curso'];
  allColumns: string[] = ['numAlum', 'name', 'apellidos', 'nif', 'edad', 'curso'];
  dataSource = ELEMENT_DATA;

  setAll(checked: boolean) {
    if (checked) {
      this.displayedColumns = this.allColumns;
    } else {
      this.displayedColumns = [];
    }
  }

  eventCheck(check: boolean, nombreTabla: string) {
    if (check)
      this.addColumn(nombreTabla);
    else
      this.removeColumn(nombreTabla);
  }

  addColumn(nombreTabla: string) {
    if (!this.displayedColumns.includes(nombreTabla)) {
      this.displayedColumns.push(nombreTabla);
    }
  }

  removeColumn(nombreTabla: string) {
    const index = this.displayedColumns.indexOf(nombreTabla);
    if (index !== -1) {
      this.displayedColumns.splice(index, 1);
    }
  }
}