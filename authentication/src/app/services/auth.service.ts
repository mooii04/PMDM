import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRequestTokenResponse } from '../models/create-request-token-interfaces';
import { Observable } from 'rxjs';

const API_KEY = "ffb374c01e49cc85b8dcc4041e282dad";
const BASE_URL = "https://api.themoviedb.org/3/movie";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //STEP 1
  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    );
  }

  //STEP 3
  createSession(): Observable<> {
    return this.http.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
      { request_token: localStorage.getItem('token') }
    );
  }

}
