import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../models/people.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>('http://swapi.dev/api/people');
  }

}
