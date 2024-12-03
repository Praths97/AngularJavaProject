import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(@Inject(String) private APIUrl: string, private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get<any>(this.APIUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.APIUrl}/${id}`);
  }

  Update(data: any): Observable<any> {
    return this.http.put(`${this.APIUrl}`, data);
  }

  Create(data: any): Observable<any> {
    return this.http.post(this.APIUrl, data);
  }

  Delete(id: any): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${id}`);
  }
}