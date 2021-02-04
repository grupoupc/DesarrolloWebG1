import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }
  getUsuaMatricula(){
    return this.http.get('/api/matricula/GetUsuaMatricula');
  }
}