import { Component } from '@angular/core';
import { StudentDto } from '../../models/studentDto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {

  curseList: string[] = ['1º DAM', '2º DAM', '1º AyF', '2º AyF'];
  student = new StudentDto('', '', 0, '');
  submitted = false;

  addStudent() {
    console.log(this.student);
    this.submitted = true;
  }

}
