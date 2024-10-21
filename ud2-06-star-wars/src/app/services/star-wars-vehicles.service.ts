import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesResponse } from '../models/vehicles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarWarsVehiclesService {

  constructor(private http: HttpClient) { }

  getVehiclesList(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>('http://swapi.dev/api/vehicles');
  }

}
