import { Injectable } from '@angular/core';
import { Icalculate } from './icalculate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScalculateService {
  private url = 'assets/country.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Icalculate[]> {
    return this.http.get<Icalculate[]>(this.url);
  }
}
