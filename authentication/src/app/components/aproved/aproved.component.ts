import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aproved',
  templateUrl: './aproved.component.html',
  styleUrl: './aproved.component.css'
})
export class AprovedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
    } else {
      window.location.href = '/home';
    }
  }

}
