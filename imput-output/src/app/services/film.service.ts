import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilmListResponse } from "../models/film.interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  getFilms(): Observable<FilmListResponse> {
    return this.http.get('https://swapi.dev/api/films/') as Observable<FilmListResponse>;
  }

}