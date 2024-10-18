import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor(private http: HttpClient) {}

    //House[] es Rafa que es el que tiene que venir
    //Observable es Fran quien esta esperando para avisar de que Rafa ha llegado
  getHouseList(): Observable<House[]> {
    return this.http.get<House[]>('http://localhost:3000/house-list');
  }
}