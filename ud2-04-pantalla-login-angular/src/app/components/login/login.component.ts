import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() password: string = '';
  @Input() email: string = '';

  guardarFormulario() {
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
  }

}
