import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilmListResponse } from "../models/film.interfaces";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  http: any;

  constructor() { }

  getFilms(): Observable<FilmListResponse> {
    return this.http.get('https://swapi.dev/api/films/') as Observable<FilmListResponse>;
  }

}