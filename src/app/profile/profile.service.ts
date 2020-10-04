import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: any): Observable<any> {
    return this.http.post('http://localhost:4200/contact', data);
  }
}
