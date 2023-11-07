import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  constructor(private http: HttpClient) {}

  readonly apiURL = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

  getAllUnits(): Observable<UnitsResponse> {
    return this.http.get<UnitsResponse>(this.apiURL);
  }

}
