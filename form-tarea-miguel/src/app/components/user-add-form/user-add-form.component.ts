import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrl: './user-add-form.component.css'
})
export class UserAddFormComponent {

  comoConocioOptions = ['Google', 'Amigo', 'Profesor'];
  sexOptions = ['Hombre', 'Mujer'];

  submitted = false;
  errorMessage = '';

  user = new UserDto('', '', '', '', '', '', '', '', '', false);

  constructor() { }

  addUser() {
    if (this.validateUser()) {
      console.log(this.user);
      this.submitted = true;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.';
    }
  }

  validateUser(): boolean {
    const { nombre, apellidos, email, contrasena, confirmarContrasena, comoConocio, sexo } = this.user;
    if (!nombre || !apellidos || !email || !contrasena || !confirmarContrasena || !comoConocio || !sexo) {
      return false;
    }
    if (contrasena !== confirmarContrasena) {
      return false;
    }
    return true;
  }

}
