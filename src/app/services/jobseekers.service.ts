import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class JobseekersService {
  constructor(private http: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private worksUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  get() {
    return this.http.get(this.worksUrl);
  }

}
