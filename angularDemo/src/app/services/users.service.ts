import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private server = "http://localhost:8080/demo/";
  constructor(private http: HttpClient) { }

  get_all_users(): Observable<any>{
    return this.http.get(this.server + 'users');
  }

  delete_users_by_etat(ids: number[]): Observable<any> {
    return this.http.post(this.server + 'users/delete' , ids);
  }
}
