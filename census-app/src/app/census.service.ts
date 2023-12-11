import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CensusService {
  private baseURL = 'http://localhost:3000/api/census';
  
  constructor(private http: HttpClient) { }

  //  Method to fetch Census Records
  getCensus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Error handling method
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
