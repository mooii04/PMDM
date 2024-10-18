import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicles } from '../interfaces/vehicles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarWarsVehiclesService {

  constructor(private http: HttpClient) { }

  getVehiclesList(): Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>('http://localhost:3000/vehicles');
  }

}
