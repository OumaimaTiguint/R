import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  get2020() {
    return this.http.get('assets/2020.json')
  }
  get2021() {
    return this.http.get('assets/2021.json')
  }
}
